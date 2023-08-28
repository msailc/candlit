import {BaseController} from "./base.controller";
import {UserService} from "../services/user.service";

export class UserController extends BaseController {
    constructor() {
        const userService = new UserService();
        super(userService);
    }

}
