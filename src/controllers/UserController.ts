import {UserDao} from "../dao/UserDao";
import {UserService} from "../services/UserService";

export class UserController {
    static async getUserById(req: any, res: any) {
        try {
            const id = parseInt(req.params.id);
            const userService = new UserService()
            const user = await userService.getById(id);

            res.status(200).json(user);
        } catch (error) {
            console.error(error);
            res.status(500).json({message: 'Internal server error'})
        }
    }

    static async getAllUsers(req: any, res: any) {
        try {
            const page = parseInt(req.query.page as string) || 1;
            const pageSize = parseInt(req.query.pageSize as string) || 20;

            const userService = new UserService();
            const {items: users, totalItems} = await userService.getAllPaginated(page, pageSize);

            res.status(200).json({totalItems, page, pageSize, users});
        } catch (error) {
            console.error(error);
            res.status(500).json({message: 'Internal server error'})
        }
}
}