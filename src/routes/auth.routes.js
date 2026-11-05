import { Router } from "express";
import { login, registrar } from "../controllers/auth.controller.js";
import { startOAuth, OAuthCallback } from "../controllers/github.controller.js";

export const rauth = Router();

rauth.post('/login', login);
rauth.post('/registrar', registrar);
rauth.post('/github', startOAuth);
rauth.post('/github/callback', OAuthCallback);