// src/controllers/ProjectController.ts
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
            res.status(500).json({ message: 'Internal server error' });
        }
    }
}
