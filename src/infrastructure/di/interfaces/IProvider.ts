import {interfaces} from "inversify";
import ServiceIdentifier = interfaces.ServiceIdentifier;
import Newable = interfaces.Newable;

export interface IProvider {
    provide: ServiceIdentifier;

    useClass: Newable<any>;
}
