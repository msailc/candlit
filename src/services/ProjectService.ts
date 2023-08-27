// src/services/ProjectService.ts
import { Project } from '../interfaces/Project';
import { ProjectDao } from '../dao/ProjectDao';

export class ProjectService {
    static async createProject(project: Project): Promise<Project> {
        return ProjectDao.createProject(project);
    }

    static async getAllProjects(page: number, pageSize: number): Promise<{ projects: Project[], totalItems: number }> {
        const offset = (page - 1) * pageSize;
        const projects = await ProjectDao.getAllProjects(offset, pageSize);
        const totalItems = await ProjectDao.getProjectsCount();
        return { projects, totalItems };
    }
}
