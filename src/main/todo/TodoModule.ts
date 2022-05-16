import "reflect-metadata";

import {TodoRepositoryStrategy} from "./TodoRepositoryStrategy";
import {TODO_REPOSITORY_TOKEN} from "./ITodoRepository";
import Module from "../../infrastructure/di/decorators/@Module";
import {TODO_SERVICE_TOKEN} from "./ITodoService";
import {TodoServiceStrategy} from "./TodoServiceStrategy";


@Module({
    import: [],
    providers: [
        {provide: TODO_REPOSITORY_TOKEN, useClass: TodoRepositoryStrategy},
        {provide: TODO_SERVICE_TOKEN, useClass: TodoServiceStrategy}
    ]
})
export class TodoModule {
}
