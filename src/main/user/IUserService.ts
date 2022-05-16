import {User} from "./User";

const USER_SERVICE = 'USER_SERVICE';

export const USER_SERVICE_TOKEN = Symbol.for(USER_SERVICE);

export interface IUserService {

    getAll: () => Array<User>;
}
