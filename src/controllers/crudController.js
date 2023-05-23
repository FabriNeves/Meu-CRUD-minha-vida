import Dados from "../models/dados.js";
class CrudController {
    constructor(model) {
      this.model = model;
    }
  
    listar = (req, res) => {
      this.model.find((err, data) => {
        if (err) {
          res.status(500).send({ message: err.message });
        } else {
          res.status(200).json(data);
        }
      });
    };
  
    obterPorId = (req, res) => {
      const id = req.params.id;
      this.model.findById(id, (err, data) => {
        if (err) {
          res.status(400).send({ message: `${err.message} - Id não localizada.` });
        } else {
          res.status(200).send(data);
        }
      });
    };
  
    cadastrar = (req, res) => {
      let newData = new this.model(req.body);
  
      newData.save((err) => {
        if (err) {
          res.status(500).send({ message: `${err.message} - Erro ao cadastrar novo item.` });
        } else {
          res.status(201).send(newData.toJSON());
        }
      });
    };
  
    atualizar = (req, res) => {
      const id = req.params.id;
      this.model.findByIdAndUpdate(id, { $set: req.body }, (err) => {
        if (!err) {
          res.status(200).send({ message: "Item atualizado com sucesso." });
        } else {
          res.status(500).send({ message: err.message });
        }
      });
    };
  
    excluir = (req, res) => {
      const id = req.params.id;
      this.model.findByIdAndDelete(id, (err) => {
        if (err) {
          res.status(500).send({ message: err.message });
        } else {
          res.status(200).send({ message: `Item removido: ${id}` });
        }
      });
    };
  }
  
export default CrudController;
  