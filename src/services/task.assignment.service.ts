import {TaskAssignmentDao} from "../dao/task.assignment.dao";
import {BaseService} from "./base.service";

export class TaskAssignmentService extends BaseService{
    constructor() {
        const taskAssignmentDao = new TaskAssignmentDao();
        super(taskAssignmentDao);
    }

    async assignTask(taskId: number, userId: number): Promise<any> {
        const taskAssignmentDao = this.dao as TaskAssignmentDao;
        const success = await taskAssignmentDao.assignTask(taskId, userId);
        return success;
    }
}
