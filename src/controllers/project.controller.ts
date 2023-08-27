import {BaseController} from "./base.controller";
import ProjectService from "../services/project.service";

export class ProjectController extends BaseController {
    constructor() {
        const projectService = new ProjectService();
        super(projectService);
    }

}
