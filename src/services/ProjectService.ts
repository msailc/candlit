import { Project } from '../interfaces/Project';
import { ProjectDao } from '../dao/ProjectDao';
import {BaseService} from "./BaseService";

export class ProjectService extends BaseService {
    constructor() {
        super('projects');
    }
}