import "reflect-metadata";
import { AppDataSource } from "./data-source/data-source";
import express, { Request, Response } from "express";

const cors = require("cors");

// Declare app antes de usá-la
export const app = express();
const port = 3000;

// Configuração do CORS
const corsOptions = {
  origin: ["http://127.0.0.1:5500", "http://localhost:5500"], // Permite ambas as origens
  methods: "GET,POST,PUT,DELETE", // Permite esses métodos HTTP
  allowedHeaders: "Content-Type,Authorization", // Permite esses cabeçalhos
};

app.use(cors(corsOptions)); // Usando o CORS com as opções configuradas

app.use(express.json());

import routes from "./routes/routes";
app.use("/api", routes);

async function connect() {
  try {
    await AppDataSource.initialize(); // Conecta ao banco de dados
    console.log("Conectado com sucesso ao banco de dados!");
  } catch (error) {
    console.error("Erro ao conectar ao banco de dados:", error);
  }
}

connect();

app.listen(port, () => {
  console.log(`Express rodando na porta ${port}`);
});
