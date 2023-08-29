import { BaseDao } from "../dao/base.dao";
import { db } from "../database/database.context";

export class TaskAssignmentDao extends BaseDao {
    constructor() {
        super("task_assignments");
    }

    async assignTask(taskId: number, userId: number): Promise<any> {
        const query = `
            INSERT INTO task_assignments (task_id, user_id)
            VALUES ($1, $2)
            RETURNING *;
        `;
        const params = [taskId, userId];

        try {
            await db.query(query, params);
            return true;
        } catch (error) {
            console.error("Error assigning task to user:", error);
            return false;
        }
    }
}
