import { Router } from 'express';
import passport from "passport";
import {ProjectController} from "./controllers/ProjectController";
import {UserController} from "./controllers/UserController";

const router = Router();

router.get('/auth/github', passport.authenticate('github'));
router.get('/auth/github/callback',
    passport.authenticate('github', { failureRedirect: '/' }),
    (req, res) => {
        console.log("success");
    });


router.post('/projects', ProjectController.createProject);
router.get('/projects', ProjectController.getAllProjects);
router.get('/projects/:id', ProjectController.getProjectById);

router.get('/users/:id', UserController.getUserById);
router.get('/users', UserController.getAllUsers);

export default router;