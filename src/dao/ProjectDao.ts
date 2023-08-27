import { BaseDao } from "./BaseDao";
import { Project } from "../interfaces/Project";

export class ProjectDao extends BaseDao {
    static async createProject(project: Project): Promise<Project> {
        const columns = ['name'];
        const values = [project.name];
        const returning = ['id', 'name'];

        const createdProject = await this.create('projects', columns, returning, ...values);
        return createdProject as Project;
    }

    static async getProjectById(id: number): Promise<Project> {
        const project = await this.getOne('projects', id);
        return project as Project;
    }

    static async getAllProjects(offset: number, limit: number): Promise<Project[]> {
        const projects = await this.getAll('projects', offset, limit);
        return projects as Project[];
    }

    static async getProjectsCount(): Promise<number> {
        return this.getItemCount('projects');
    }
}
