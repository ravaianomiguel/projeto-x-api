import { Router } from "express";
import { criar, remover, getById} from "../controllers/interacao.controller"
import { rfoto } from "./foto.routes";

export const rinteracao = Router();

rinteracao.use('/:interacaoId/fotos', rfoto)
rinteracao.get('/:id', getById);
rinteracao.post('/', criar);
rinteracao.delete('/:id', remover);