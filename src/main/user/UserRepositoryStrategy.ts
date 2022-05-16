import Bean from "../../infrastructure/di/decorators/@Bean";
import {IUserRepository} from "./IUserRepository";
import {User} from "./User";

@Bean()
export class UserRepositoryStrategy implements IUserRepository {

    public getAll(): Array<User> {
        return [{id: 1, name: 'steve'}];
    }

}
