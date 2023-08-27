import {BaseDao} from "./BaseDao";

export class UserDao extends BaseDao {
    static async getUserById(id: number): Promise<any> {
        const user = await this.getOne('users', id);
        return user;
    }

    static async getAllUsers(offset: number, limit: number): Promise<any[]> {
        const users = await this.getAll('users', offset, limit);
        return users;
    }
}