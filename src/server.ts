import express from 'express';
import { ProjectController } from './controllers/ProjectController';
import dotenv from 'dotenv';
import { db } from "./database/dbContext";

dotenv.config();

const app = express();

app.use(express.json());

app.post('/projects', ProjectController.createProject);
app.get('/projects', ProjectController.getAllProjects);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
