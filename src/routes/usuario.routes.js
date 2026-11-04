import { Router } from "express";
import {getById, getAll, editar} from "../controllers/usuario.controller.js"
import {getByUsuario} from "../controllers/interacao.controller.js";
import { autenticar } from "../middlewares/auth.middleware.js";

export const rusuario = Router();

rusuario.get('/', getAll);
rusuario.get('/:id', getById);
rusuario.get('/:usuarioId/interacoes', getByUsuario);
rusuario.patch('/:id', autenticar , editar);
