import { Router } from 'express';
import passport from "passport";
import {ProjectController} from "./controllers/ProjectController";

const router = Router();

router.get('/auth/github', passport.authenticate('github'));

router.get('/auth/github/callback',
    passport.authenticate('github', { failureRedirect: '/' }),
    (req, res) => {
        console.log("success");
    });


router.post('/projects', ProjectController.createProject);
router.get('/projects', ProjectController.getAllProjects);

export default router;