import express from "express";
import CrudController from "../controllers/crudController.js";
import Dados from "../models/dados.js";

const crudRouter = express.Router();
const dadosController = new CrudController(Dados);

const rota = "dados";

router.get(`/${rota}/listar`, dadosController.listar);
router.post(`/${rota}/cadastrar`, dadosController.cadastrar);
router.put(`/${rota}/atualizar:id`, dadosController.atualizar);
router.get(`/${rota}/porID:id`, dadosController.obterPorId);
router.delete(`/${rota}/excluir:id`, dadosController.excluir);

export default crudRouter;
