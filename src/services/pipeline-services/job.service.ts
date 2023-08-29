import {JobDao} from "../../dao/pipeline-dao/job.dao";

export class JobService {
    protected jobDao: JobDao;

    constructor() {
        this.jobDao = new JobDao();
    }

    async createJob(projectId: number): Promise<any> {
        return this.jobDao.createJob(projectId);
    }

    async createPipelineStep(jobId: number, stepNumber: number, command: string): Promise<any> {
        return this.jobDao.createPipelineStep(jobId, stepNumber, command);
    }

}
