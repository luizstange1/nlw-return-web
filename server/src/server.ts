import express from "express";
import { routes } from "./routes";
import cors from "cors";

const app = express();

//GET, POST, PUT, PATCH, DELETE

//Get = buscar informações
//post = cadastrar informações
//put = atualizar informações de uma entidade
//patch = atualizar uma informação unica de uma entidade
//delete = deletar

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  console.log("HTTP Server running");
});
