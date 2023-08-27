import { QueryResult } from 'pg';
import { db } from '../database/database.context';

export class BaseDao {
    private table_name: string;

    constructor(table_name: string) {
        this.table_name = table_name;
    }

    async get_all(page: number, pageSize: number): Promise<any[]> {
        const offset = (page - 1) * pageSize;
        const query = `SELECT * FROM ${this.table_name} OFFSET $1 LIMIT $2`;
        const result = await db.query(query, [offset, pageSize]);
        return result.rows;
    }

    async get_total_count(): Promise<number> {
        const query = `SELECT COUNT(*) FROM ${this.table_name}`;
        const result = await db.query(query, []);
        return parseInt(result.rows[0].count, 10);
    }

    async get_by_id(id: number): Promise<any | null> {
        const query = `SELECT * FROM ${this.table_name} WHERE id = $1`;
        const result = await db.query(query, [id]);
        return result.rows[0] || null;
    }

    async delete(id: number): Promise<void> {
        const query = `DELETE FROM ${this.table_name} WHERE id = $1`;
        await db.query(query, [id]);
    }

    async add(entity: Record<string, any>): Promise<Record<string, any>> {
        const columns = Object.keys(entity).join(', ');
        const placeholders = Object.keys(entity).map((_, i) => `$${i + 1}`).join(', ');
        const values = Object.values(entity);

        const query = `INSERT INTO ${this.table_name} (${columns}) VALUES (${placeholders}) RETURNING *`;
        const result = await db.query(query, values);
        return result.rows[0];
    }

    async update(id: number, entity: Record<string, any>, id_column = 'id'): Promise<void> {
        const setColumns = Object.keys(entity).map((col, i) => `${col} = $${i + 1}`).join(', ');
        const values = Object.values(entity);
        values.push(id);

        const query = `UPDATE ${this.table_name} SET ${setColumns} WHERE ${id_column} = $${values.length}`;
        await db.query(query, values);
    }
}

