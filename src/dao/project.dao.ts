import {BaseDao} from "./base.dao";
import {db} from "../database/database.context";

export class ProjectDao extends BaseDao {
    constructor() {
        super('projects');
    }

    async assign_team(projectId: string, teamId: string): Promise<boolean> {
        const query = `UPDATE projects SET team_id = $1 WHERE id = $2`;
        const params = [teamId, projectId];

        try {
            await db.query(query, params);
            return true;
        } catch (error) {
            console.error("Error assigning team to project:", error);
            return false;
        }
    }

}

