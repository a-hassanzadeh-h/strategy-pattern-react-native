import {inject} from "inversify";
import {ServiceIdentifierOrFunc} from "inversify/lib/annotation/lazy_service_identifier";

export default function Autowired<T>(bean: ServiceIdentifierOrFunc<T>): any {
    return inject(bean)
}
