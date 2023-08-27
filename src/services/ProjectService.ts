// src/services/ProjectService.ts
import { Project } from '../interfaces/Project';
import { ProjectDao } from '../dao/ProjectDao';

export class ProjectService {
    static async createProject(project: Project): Promise<Project> {
        return ProjectDao.create(project);
    }

    //
}
