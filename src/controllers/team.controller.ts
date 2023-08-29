import { BaseController } from "./base.controller";
import { TeamService } from "../services/team.service";
import { Request, Response } from 'express';

export class TeamController extends BaseController {
    constructor() {
        const teamService = new TeamService();
        super(teamService);
    }

    async addMember(req: Request, res: Response) {
        try {
            const { teamId, userId } = req.body; // Assuming you're sending teamId and userId in the request body
            if (teamId && userId) {
                const teamService = this.service as TeamService;
                const success = await teamService.add_member(teamId, userId);
                if (success) {
                    this.sendSuccessResponse(res, { message: 'Member added successfully.' }, 201);
                } else {
                    this.sendErrorResponse(res, 'Failed to add member.', 400);
                }
            } else {
                this.sendErrorResponse(res, 'Missing teamId or userId in the request body.', 400);
            }
        } catch (error) {
            this.sendErrorResponse(res, 'An error occurred while adding the member.');
        }
    }
}
