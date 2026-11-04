import { Router } from "express";
import {getByInteracao, criar} from "../controllers/foto.controller.js"
import { autenticar } from "../middlewares/auth.middleware.js";

export const rfoto = Router();

rfoto.get('/', getByInteracao);
rfoto.post('/', autenticar , criar);