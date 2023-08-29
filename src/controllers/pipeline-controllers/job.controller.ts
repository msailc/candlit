import {Request, Response} from 'express';
import {JobService} from "../../services/pipeline-services/job.service";

export class JobController {
    private jobService: JobService;

    constructor() {
        this.jobService = new JobService();
    }

    async createJob(req: Request, res: Response) {
        try {
            const projectId = parseInt(req.body.projectId, 10);
            const job = await this.jobService.createJob(projectId);
            res.status(201).json({ success: true, job });
        } catch (error) {
            res.status(500).json({ success: false, error: 'Failed to create job.' });
        }
    }

    async createPipelineStep(req: Request, res: Response) {
        try {
            const jobId = parseInt(req.body.jobId, 10);
            const stepNumber = parseInt(req.body.stepNumber, 10);
            const command = req.body.command;

            const step = await this.jobService.createPipelineStep(jobId, stepNumber, command);
            res.status(201).json({ success: true, step });
        } catch (error) {
            res.status(500).json({ success: false, error: 'Failed to create pipeline step.' });
        }
    }

}
