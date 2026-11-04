import { Router } from "express";
import {getById, getAll, criar, remover} from "../controllers/tutorial.controller"
import { getByTutorial } from "../controllers/interacao.controller";

export const rtutorial = Router();

rtutorial.get('/', getAll);
rtutorial.get('/:id', getById);
rtutorial.post('/', criar);
rtutorial.delete('/', remover);
rtutorial.get('/:tutorialId/interacoes', getByTutorial);