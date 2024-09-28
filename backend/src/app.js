import 'dotenv/config'
//importação das funcionalidades do express, cors e do controller
import express from 'express'
import cors from 'cors'
import agendamentoController from "./controller/agendamentosController.js"

//criação do servidor
const servidor = express();
servidor.use(cors());
servidor.use(express.json());
servidor.use(agendamentoController);

servidor.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Erro interno do servidor');
});

let port = process.env.PORT;
servidor.listen(port, () => console.log("API SUBIU!"));

export default servidor