import {Todo} from "./Todo";

const TODO_REPOSITORY = 'TODO_REPOSITORY'

export const TODO_REPOSITORY_TOKEN = Symbol.for(TODO_REPOSITORY);

export abstract class ITodoRepository {
    getAll: () => Array<Todo>
}
