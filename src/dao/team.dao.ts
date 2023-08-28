import { BaseDao } from "./base.dao";
import { db } from '../database/database.context';

export class TeamDao extends BaseDao {
    constructor() {
        super('teams');
    }

    async add_member(teamId: string, userId: string) {
        const query = `
            INSERT INTO team_user (team_id, user_id)
            VALUES ($1, $2)
        `;
        const queryParams = [teamId, userId];

        try {
            await db.query(query, queryParams);
            return true;
        } catch (error) {
            console.error("Error adding member to team:", error);
            return false;
        }
    }
}
