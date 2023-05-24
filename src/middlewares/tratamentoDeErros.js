import mongoose from "mongoose";

/**Tratamento de erros */

function trataErro(erro,res) {
    console.log("Erro interno detectado.");
    if (erro instanceof mongoose.Error.CastError) {
        res.status(400).json({ isSuccess: false, message: "Um ou mais dados fornecidos está incorreto." })
    } else {
        res.status(500).json({ isSuccess: false, message: erro })
    }
}

export default trataErro;