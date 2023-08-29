import { ProjectDao } from "../dao/project.dao";
import { BaseService } from "./base.service";

class ProjectService extends BaseService {
    constructor() {
        const projectDao = new ProjectDao();
        super(projectDao);
    }

    async assignTeam(projectId: string, teamId: string): Promise<boolean> {
            const projectDao = this.dao as ProjectDao;
            const success = await projectDao.assignTeam(projectId, teamId);
            return success;
    }
}

export default ProjectService;
