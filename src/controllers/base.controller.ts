import { Request, Response } from 'express';
import {BaseService} from "../services/base.service";

export class BaseController {
    protected service: BaseService;

    constructor(service: BaseService) {
        this.service = service;
    }

    protected sendSuccessResponse(res: Response, data: any, statusCode = 200) {
        res.status(statusCode).json({ success: true, data });
    }

    protected sendErrorResponse(res: Response, message: string, statusCode = 500) {
        res.status(statusCode).json({ success: false, error: message });
    }

    async getAll(req: Request, res: Response) {
        try {
            const page = parseInt(req.query.page as string, 10) || 1;
            const pageSize = parseInt(req.query.pageSize as string, 10) || 10;

            const result = await this.service.get_all(page, pageSize);
            const { data, totalItems } = result;

            res.status(200).json({
                success: true,
                totalItems,
                page,
                pageSize,
                data
            });
        } catch (error) {
            this.sendErrorResponse(res, 'An error occurred while fetching data.');
        }
    }

    async getById(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id, 10);
            if (!isNaN(id)) {
                const entity = await this.service.get_by_id(id);
                if (entity) {
                    this.sendSuccessResponse(res, entity);
                } else {
                    this.sendErrorResponse(res, 'Entity not found.', 404);
                }
            } else {
                this.sendErrorResponse(res, 'Invalid ID parameter.', 400);
            }
        } catch (error) {
            this.sendErrorResponse(res, 'An error occurred while fetching data.');
        }
    }

    async add(req: Request, res: Response) {
        try {
            const entity = req.body;
            const result = await this.service.add(entity);
            this.sendSuccessResponse(res, result, 201);
        } catch (error) {
            this.sendErrorResponse(res, 'An error occurred while adding data.');
        }
    }
}

