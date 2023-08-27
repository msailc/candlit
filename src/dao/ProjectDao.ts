// src/dao/ProjectDAO.ts
import { Project } from '../interfaces/Project';
import {db} from "../database/dbContext";

export class ProjectDao {
    static async create(project: Project): Promise<Project> {
        const query = 'INSERT INTO projects (name) VALUES ($1) RETURNING *';
        const values = [project.name];

        const result = await db.query(query, values);
        return result.rows[0];
    }

}
