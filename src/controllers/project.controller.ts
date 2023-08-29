import {BaseController} from "./base.controller";
import ProjectService from "../services/project.service";
import {Request, Response} from "express";

export class ProjectController extends BaseController {
    constructor() {
        const projectService = new ProjectService();
        super(projectService);
    }

    async assignTeam(req : Request, res: Response) {
        try {
            const { projectId, teamId } = req.body;
            if (projectId && teamId) {
                const projectService = this.service as ProjectService;
                const success = await projectService.assignTeam(projectId, teamId);
                if (success) {
                    this.sendSuccessResponse(res, { message: 'Team assigned successfully.' }, 201);
                } else {
                    this.sendErrorResponse(res, 'Failed to assign team.', 400);
                }
            } else {
                this.sendErrorResponse(res, 'Missing projectId or teamId in the request body.', 400);
            }
        } catch (error) {
            this.sendErrorResponse(res, 'An error occurred while assigning the team.');
        }
    }

}
