import {IUserService} from "./IUserService";
import {User} from "./User";
import Bean from "../../infrastructure/di/decorators/@Bean";
import Autowired from "../../infrastructure/di/decorators/@Autowired";
import {IUserRepository, USER_REPOSITORY_TOKEN} from "./IUserRepository";

@Bean()
export class UserServiceStrategy implements IUserService {

    @Autowired(USER_REPOSITORY_TOKEN) private repository: IUserRepository;

    public getAll(): Array<User> {
        return this.repository.getAll();
    }
}
