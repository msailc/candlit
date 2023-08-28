export interface CommonService {
    get_all(page: number, pageSize: number): Promise<{ data: any[]; totalItems: number }>;
    get_by_id(id: number): Promise<any | null>;
    add(entity: Record<string, any>): Promise<Record<string, any>>;
    update(entity: Record<string, any>, id: number): Promise<void>;
    delete(id: number): Promise<void>;
}
