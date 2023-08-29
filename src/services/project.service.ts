import { ProjectDao } from "../dao/project.dao";
import { BaseService } from "./base.service";

class ProjectService extends BaseService {
    constructor() {
        const projectDao = new ProjectDao();
        super(projectDao);
    }

    async assign_team(projectId: string, teamId: string): Promise<boolean> {
        try {
            const projectDao = this.dao as ProjectDao;
            const success = await projectDao.assign_team(projectId, teamId);
            return success;
        } catch (error) {
            console.error("Error in assign_team:", error);
            throw new Error("Failed to assign team to project.");
        }
    }
}

export default ProjectService;
