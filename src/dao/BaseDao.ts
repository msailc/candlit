import {db} from "../database/dbContext";

export class BaseDao {
    static async create(table: string, values: string[], returning: string[], ...params: any[]): Promise<any> {
        const query = `INSERT INTO ${table} (${values.join(', ')}) 
                                VALUES (${values.map((_, i) => `$${i + 1}`)}) 
                                RETURNING ${returning.join(', ')}`;

        const result = await db.query(query, params);
        return result.rows[0];
    }

    static async getAll(table: string, offset: number = 0, limit: number = 10): Promise<any[]> {
        const query = `SELECT * FROM ${table} LIMIT $1 OFFSET $2`;
        const result = await db.query(query, [limit, offset]);
        return result.rows;
    }

    static async getOne(table: string, id: number): Promise<any> {
        const query = `SELECT * FROM ${table} WHERE id = $1`;
        const result = await db.query(query, [id]);
        return result.rows[0];
    }

    static async getItemCount(table: string): Promise<number> {
        const query = `SELECT COUNT(*) FROM ${table}`;
        const result = await db.query(query, []);
        return parseInt(result.rows[0].count, 10);
    }

}