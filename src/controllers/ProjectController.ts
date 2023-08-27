import { Request, Response } from 'express';
import { BaseService } from '../services/BaseService';
import { Project } from '../interfaces/Project';
import { ProjectService } from "../services/ProjectService";

export class ProjectController {
    static async createProject(req: Request, res: Response): Promise<void> {
        try {
            const { name } = req.body;
            const project: Project = { name };

            const projectService = new ProjectService();
            const createdProject = await projectService.create(['name'], ['id', 'name'], project);

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

            const projectService = new ProjectService();
            const { items: projects, totalItems } = await projectService.getAllPaginated(page, pageSize);

            res.status(200).json({ totalItems, page, pageSize, projects });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    static async getProjectById(req: Request, res: Response): Promise<void> {
        try {
            const id = parseInt(req.params.id);
            const projectService = new ProjectService();
            const project = await projectService.getById(id);

            res.status(200).json(project);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
}
