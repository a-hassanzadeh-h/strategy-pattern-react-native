import {ITodoRepository} from "./ITodoRepository";
import {Todo} from "./Todo";
import {injectable} from "inversify";
import Bean from "../../infrastructure/di/decorators/@Bean";

@Bean()
export class TodoRepositoryStrategy implements ITodoRepository {
    constructor() {
    }


    getAll(): Array<Todo> {
        return [
            {
                title: 'Find Dependency Injection',
                done: true
            },
            {
                title: 'Test that!',
                done: false
            }
        ]
    }

}
