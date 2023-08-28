import express from 'express';
import dotenv from 'dotenv';
import { db } from "./database/database.context";
import router from "./router";

import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from './swagger/swagger_output.json';

const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;
const session = require('express-session');

dotenv.config();

const app = express();

app.use(express.json());

app.use(session({ secret: process.env.SESSION_SECRET, resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use(router);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: process.env.GITHUB_CALLBACK_URL
}, async (accessToken: string, refreshToken: string, profile: any, done: Function) => {
    try {
        const { id, username, provider } = profile;
        const avatar_url = profile.photos[0].value;

        const userQuery = 'SELECT * FROM users WHERE github_id = $1';
        const user = await db.query(userQuery, [id]);

        if (user.rows.length === 0) {
            const createUserQuery = 'INSERT INTO users (username, github_id, avatar_url, provider) VALUES ($1, $2, $3, $4) RETURNING *';
            const newUser = await db.query(createUserQuery, [username, id, avatar_url, provider]);
            done(null, newUser.rows[0]);
        } else {
            done(null, user.rows[0]);
        }
    } catch (error) {
        done(error);
    }
}));

passport.serializeUser((user: any, done: Function) => {
    done(null, user.id);
});

passport.deserializeUser(async (id: number, done: (error: any, user: any) => void) => {
    try {
        const userQuery = 'SELECT * FROM users WHERE id = $1';
        const user = await db.query(userQuery, [id]);

        if (user.rows.length === 0) {
            done(null, null); // User not found
        } else {
            done(null, user.rows[0]);
        }
    } catch (error) {
        done(error, null);
    }
});


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});