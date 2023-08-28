import {BaseService} from "./base.service";
import {UserDao} from "../dao/user.dao";

export class UserService extends BaseService {
    constructor() {
        const userDao = new UserDao();
        super(userDao);
    }
}

