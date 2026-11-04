import { Router } from "express";
import { login, registrar } from "../controllers/auth.controller.js";

export const rauth = Router();

rauth.post('/login', login);
rauth.post('/registrar', registrar);