import {ProjectDao} from "../dao/project.dao";
import {BaseService} from "./base.service";

class ProjectService extends BaseService {
    constructor() {
        const projectDao = new ProjectDao();
        super(projectDao);
    }
}

export default ProjectService;
