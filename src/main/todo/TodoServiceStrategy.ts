import {ITodoService} from "./ITodoService";
import {Todo} from "./Todo";
import {ITodoRepository, TODO_REPOSITORY_TOKEN} from "./ITodoRepository";
import Bean from "../../infrastructure/di/decorators/@Bean";
import Autowired from "../../infrastructure/di/decorators/@Autowired";

@Bean()
export class TodoServiceStrategy implements ITodoService {


    @Autowired(TODO_REPOSITORY_TOKEN) private repository: ITodoRepository

    constructor() {
        console.log('repo', this.repository)
    }

    public fetchAll(): Array<Todo> {
        return this.repository.getAll();
    }

    public sayHi(): void {
        console.log('Hi...');
    }
}
