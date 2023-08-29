import { BaseController } from "./base.controller";
import { Request, Response } from "express";
import {TaskAssignmentService} from "../services/task.assignment.service";

export class TaskAssignmentController extends BaseController {
    constructor() {
        const taskAssignmentService = new TaskAssignmentService();
        super(taskAssignmentService);
    }

    async assignTask(req: Request, res: Response) {
        try {
            const { taskId, userId } = req.body;
            if (taskId && userId) {
                const taskAssignmentService = this.service as TaskAssignmentService;
                const assignment = await taskAssignmentService.assignTask(taskId, userId);
                this.sendSuccessResponse(res, assignment, 201);
            } else {
                this.sendErrorResponse(res, 'Missing taskId or userId in the request body.', 400);
            }
        } catch (error) {
            this.sendErrorResponse(res, 'An error occurred while assigning the task.');
        }
    }
}
