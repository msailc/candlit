import { BaseService } from "./base.service";
import { TeamDao } from "../dao/team.dao";

export class TeamService extends BaseService {
    constructor() {
        const teamDao = new TeamDao();
        super(teamDao);
    }
    async add_member(teamId: string, userId: string): Promise<boolean> {
        const teamDao = this.dao as TeamDao;
        const success = await teamDao.add_member(teamId, userId);
        return success;
    }
}
