import {Container, ContainerModule} from "inversify";
import {IProvider} from "./interfaces/IProvider";
import {IModule} from "./interfaces/IModule";


export class Application {
    private static container: Container = new Container();

    public static run(module: any): void {

        let moduleMeta: IModule | null = null;

        const keys = Reflect.getMetadataKeys(Reflect) || [];
        keys.forEach((key: string) => {
            const sections = key.split('_');
            if (sections[sections.length - 1] === module.name) {
                moduleMeta = Reflect.getMetadata(key, Reflect);
                this.load(moduleMeta)
            }
        })
        if (!moduleMeta)
            throw new Error(`${module} Not found!`)

    }

    public static getBean<T>(token: any) {
        return this.container.get<T>(token);

    }

    private static load(moduleMeta: IModule | null): void {
        if (moduleMeta) {
            if (moduleMeta.providers.length)
                this.loadModule(moduleMeta.providers);
            if (moduleMeta.import.length)
                moduleMeta.import.forEach(m => this.run(m))

        }

    }

    private static loadModule(module_meta: IProvider[]): void {
        this.container.load(new ContainerModule((bind, unbind) => {
            module_meta.forEach(mt => bind(mt.provide).to(mt.useClass).inSingletonScope())
        }))
    }

}
