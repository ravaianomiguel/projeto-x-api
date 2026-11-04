import { Router } from "express";
import {getById, getAll, editar} from "../controllers/usuario.controller"
import {getByUsuario} from "../controllers/interacao.controller";

export const rusuario = Router();

rusuario.get('/', getAll);
rusuario.get('/:id', getById);
rusuario.patch('/:id', editar);
rusuario.get('/:usuarioId/interacoes', getByUsuario);