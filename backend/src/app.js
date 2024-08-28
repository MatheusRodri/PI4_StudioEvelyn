import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import loginController from "../src/controller/loginController.js"

const servidor = express();

servidor.use(cors());
servidor.use(express.json());
servidor.use(loginController);

servidor.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Erro interno do servidor');
});

let port = process.env.PORT;
servidor.listen(3000, () => console.log("API SUBIU!"));

export default servidor