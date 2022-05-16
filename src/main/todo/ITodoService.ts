import {Todo} from "./Todo";

const TODO_SERVICE = 'TODO_SERVICE';
export const TODO_SERVICE_TOKEN = Symbol.for(TODO_SERVICE);


export abstract class ITodoService {
    public fetchAll: () => Array<Todo>;

    public sayHi: () => void;
}
