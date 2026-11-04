import { Router } from "express";
import {getById, getAll, criar, remover} from "../controllers/tutorial.controller.js"
import { getByTutorial } from "../controllers/interacao.controller.js";
import { autenticar } from "../middlewares/auth.middleware.js";

export const rtutorial = Router();

rtutorial.get('/', getAll);
rtutorial.get('/:id', getById);
rtutorial.get('/:tutorialId/interacoes', getByTutorial);
rtutorial.use(autenticar)
rtutorial.post('/', criar);
rtutorial.delete('/', remover);
