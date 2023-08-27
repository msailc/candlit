import { Router } from 'express';
import passport from "passport";
import {ProjectController} from "./controllers/project.controller";

const router = Router();

const projectController = new ProjectController();

router.get('/auth/github', passport.authenticate('github'));
router.get('/auth/github/callback',
    passport.authenticate('github', { failureRedirect: '/' }),
    (req, res) => {
        console.log("success");
    });

router.get('/projects', projectController.getAll.bind(projectController));
router.get('/projects/:id', projectController.getById.bind(projectController));
router.post('/projects', projectController.add.bind(projectController));


export default router;