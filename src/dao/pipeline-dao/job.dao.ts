import { db } from '../../database/database.context';

export class JobDao {
    async createJob(projectId: number): Promise<any> {
        const query = `
            INSERT INTO jobs (project_id, status)
            VALUES ($1, $2)
            RETURNING *;
        `;
        const values = [projectId, 'pending'];

        const result = await db.query(query, values);
        return result.rows[0];
    }

    async createPipelineStep(jobId: number, stepNumber: number, command: string): Promise<any> {
        const query = `
            INSERT INTO pipeline_steps (job_id, step_number, command, status)
            VALUES ($1, $2, $3, $4)
            RETURNING *;
        `;
        const values = [jobId, stepNumber, command, 'pending'];

        const result = await db.query(query, values);
        return result.rows[0];
    }


}
