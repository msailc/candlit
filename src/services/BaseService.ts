import { BaseDao } from '../dao/BaseDao';

export class BaseService {
    constructor(protected entityName: string) {}

    async create(values: string[], returning: string[], ...params: any[]): Promise<any> {
        const createdEntity = await BaseDao.create(this.entityName, values, returning, ...params);
        return createdEntity;
    }

    async getAllPaginated(page: number, pageSize: number): Promise<{ items: any[], totalItems: number }> {
        const offset = (page - 1) * pageSize;
        const items = await BaseDao.getAll(this.entityName, offset, pageSize);
        const totalItems = await BaseDao.getItemCount(this.entityName);
        return { items, totalItems };
    }
}