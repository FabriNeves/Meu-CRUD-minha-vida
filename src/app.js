
// Blibliotecas Importadas
import express from "express";
import db from "./config/mongoConection.js";
import routes from "./routes/index.js";
import trataErro from "./middlewares/tratamentoDeErros.js";
import cors from 'cors';

db.on("error", console.log.bind(console, "Erro de conexão...")); // bind = ligar , conectar.
db.once("open", () => console.log("Conexão com o banco de dados estabelecida."));

const app = express();

// Habilitar CORS
app.use(cors({
    origin: '*'
}));

app.use(express.json())

routes(app);

app.use((erro, req, res, next) => {
   trataErro(erro,res);
})

export default app; 