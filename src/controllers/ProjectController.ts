import { Request, Response } from 'express';
import { ProjectService } from '../services/ProjectService';
import { Project } from '../interfaces/Project';

export class ProjectController {
    static async createProject(req: Request, res: Response): Promise<void> {
        try {
            const { name } = req.body;
            const project: Project = { name };

            const createdProject = await ProjectService.createProject(project);

            res.status(201).json(createdProject);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Bad request' });
        }
    }

    static async getAllProjects(req: Request, res: Response): Promise<void> {
        try {
            const page = parseInt(req.query.page as string) || 1;
            const pageSize = parseInt(req.query.pageSize as string) || 20;

            const { projects, totalItems } = await ProjectService.getAllProjects(page, pageSize);

            res.status(200).json({ totalItems, page, pageSize, projects });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
}
