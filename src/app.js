import dotenv from "dotenv";
dotenv.config();
import express from "express";
import {router} from "./routes/index.js"
import { sequelize } from "./config/database.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use('/', router)

async function iniciar() {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log('Banco de dados conectado e sincronizado.');

    app.listen(PORT, () => {
      console.log(`Servidor rodando em http://localhost:${PORT}`);
    });
  } catch (erro) {
    console.error('Erro ao iniciar o servidor:', erro);
  }
}

iniciar();