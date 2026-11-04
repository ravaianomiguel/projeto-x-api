import { Router } from "express"
import { rtutorial } from "./foto.routes"
import { rinteracao } from "./interacao.routes"
import { rusuario } from "./usuario.routes"

export const router = Router();

router.use("/tutoriais", rtutorial)
router.use("/interacoes", rinteracao)
router.use("/usuarios", rusuario)