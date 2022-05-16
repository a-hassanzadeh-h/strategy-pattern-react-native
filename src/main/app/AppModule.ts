import Module from "../../infrastructure/di/decorators/@Module";
import {TodoModule} from "../todo/TodoModule";
import {UserModule} from "../user/UserModule";

@Module({
    import: [TodoModule, UserModule],
    providers: []
})
export class AppModule {
}
