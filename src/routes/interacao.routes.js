import { Router } from "express";
import { criar, remover, getById} from "../controllers/interacao.controller.js"
import { rfoto } from "./foto.routes.js";
import { autenticar } from "../middlewares/auth.middleware.js";

export const rinteracao = Router();

rinteracao.use('/:interacaoId/fotos', rfoto)
rinteracao.get('/:id', getById);
rinteracao.use(autenticar)
rinteracao.post('/', criar);
rinteracao.delete('/:id', remover);