import { Router } from "express"
import { rtutorial } from "./tutorial.routes.js"
import { rinteracao } from "./interacao.routes.js"
import { rusuario } from "./usuario.routes.js"
import { rauth } from "./auth.routes.js"

export const router = Router();

router.use("/tutoriais", rtutorial)
router.use("/interacoes", rinteracao)
router.use("/usuarios", rusuario)
router.use("/auth", rauth)