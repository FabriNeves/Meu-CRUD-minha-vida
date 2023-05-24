import mongoose from "mongoose";

/**Tratamento de erros */

function trataErro(erro, res) {
    console.log(`O nome do erro é: ${erro.name}\n`)
    console.log(`A mensagem de erro é: ${erro.message}\n`)
    console.log(`A stack do erro é: ${erro.stack}\n`)

    if (erro instanceof mongoose.Error.CastError) {
        res.status(400).json({ isSuccess: false, message: "Um ou mais dados fornecidos está incorreto." })
    } else if( erro instanceof mongoose.Error.ValidationError){
        const msgErr = Object.values(erro.errors)
        .map(erro => erro.message)
        .join("; ");
        res.status(400).json({ isSuccess: false, message: msgErr })
    } else  {
        res.status(500).json({ isSuccess: false, message: erro })
    }
}

export default trataErro;