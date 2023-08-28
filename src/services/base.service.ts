import {BaseDao} from "../dao/base.dao";
import {CommonService} from "./interfaces/service.interface";

export class BaseService implements CommonService {
    protected dao: BaseDao;

    constructor(dao: BaseDao) {
        this.dao = dao;
    }

    async get_all(page: number, pageSize: number): Promise<{ data: any[]; totalItems: number }> {
        const data = await this.dao.get_all(page, pageSize);
        const totalItems = await this.dao.get_total_count(); // Implement this method in BaseDao
        return { data, totalItems };
    }

    async get_by_id(id: number): Promise<any | null> {
        return this.dao.get_by_id(id);
    }

    async add(entity: Record<string, any>): Promise<Record<string, any>> {
        return this.dao.add(entity);
    }

    async update(entity: Record<string, any>, id: number): Promise<void> {
        await this.dao.update(id, entity);
    }

    async delete(id: number): Promise<void> {
        await this.dao.delete(id);
    }
}

