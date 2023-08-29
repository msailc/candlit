import { Router } from 'express';
import passport from "passport";
import {ProjectController} from "./controllers/project.controller";
import {UserController} from "./controllers/user.controller";
import {TeamController} from "./controllers/team.controller";

const router = Router();

const projectController = new ProjectController();
const userController = new UserController();
const teamController = new TeamController();

router.get('/auth/github', passport.authenticate('github'));
router.get('/auth/github/callback',
    passport.authenticate('github', { failureRedirect: '/' }),
    (req, res) => {
        console.log("success");
    });

router.get('/projects', projectController.getAll.bind(projectController));
router.get('/projects/:id', projectController.getById.bind(projectController));
router.post('/projects', projectController.add.bind(projectController));
router.post('/projects/assign-team', projectController.assignTeam.bind(projectController));

router.get('/users', userController.getAll.bind(userController));
router.get('/users/:id', userController.getById.bind(userController));

router.get('/teams', teamController.getAll.bind(teamController));
router.get('/teams/:id', teamController.getById.bind(teamController));
router.post('/teams', teamController.add.bind(teamController));
router.post('/teams/add-member', teamController.addMember.bind(teamController));

export default router;