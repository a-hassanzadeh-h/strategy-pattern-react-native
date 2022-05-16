import 'reflect-metadata';
import {IModule} from "../interfaces/IModule";
import {METADATA} from "../constants/Metadata";


export default function Module(config: IModule): any {
    return function (ctr: Function) {
        Reflect.defineMetadata(
            METADATA.key.concat('_').concat(ctr.name),
            config,
            Reflect
        )
    }
}
