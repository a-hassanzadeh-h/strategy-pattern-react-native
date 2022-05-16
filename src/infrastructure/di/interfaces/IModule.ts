import {IProvider} from "./IProvider";
import {interfaces} from "inversify";
import Newable = interfaces.Newable;

export interface IModule {

    import: Array<Newable<any>>;

    providers: Array<IProvider>;
}
