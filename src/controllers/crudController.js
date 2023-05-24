import Dados from "../models/dados.js";
class CrudController {
  constructor(model) {
    this.model = model;
  }

  listar = async (req, res) => {
    try {
      const data = await this.model.find();
      res.status(200).json({ isSuccess: true, message: data });
    } catch (err) {
      res.status(500).json({ isSuccess: false, message: err });
    }
  };

  obterPorId = async (req, res) => {
    try {
      const id = req.params.id;
      const data = await this.model.findById(id);
      if (data !== null) {
        res.status(200).json({ isSuccess: true, message: data });
      } else {
        res.status(404).json({ isSuccess: false, message: "ID não localizada" })
      }
    } catch (err) {
      res.status(500).json({ isSuccess: false, message: err })
    }
  };

  cadastrar = async (req, res) => {
    try {
      const newData = new this.model(req.body);
      const savedData = await newData.save();
      res.status(201).json({ isSuccess: true, message: savedData.toJSON() });
    } catch (err) {
      res.status(500).json({ isSuccess: false, message: `${err.message} - Erro ao cadastrar novo item.` });
    }
  };

  atualizar = async (req, res) => {
    try {
      const id = req.params.id;
      await this.model.findByIdAndUpdate(id, { $set: req.body });
      res.status(200).json({ isSuccess: true, message: "Item atualizado com sucesso." });
    } catch (err) {
      res.status(500).json({ isSuccess: false, message: err.message });
    }
  };

  excluir = async (req, res) => {
    try {
      const id = req.params.id;
      await this.model.findByIdAndDelete(id);
      res.status(200).json({ isSuccess: true, message: `Item removido: ${id}` });
    } catch (err) {
      res.status(500).json({ isSuccess: false, message: err.message });
    }
  }
}

export default CrudController;
