import { Router } from "express";
import {getByInteracao, criar} from "../controllers/foto.controller"

export const rfoto = Router();

rfoto.get('/', getByInteracao);
rfoto.post('/', criar);