import {User} from "./User";

const USER_REPOSITORY = 'USER_REPOSITORY';

export const USER_REPOSITORY_TOKEN = Symbol.for(USER_REPOSITORY);

export interface IUserRepository{

    getAll: () => Array<User>;
}
