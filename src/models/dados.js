import mongoose from "mongoose";

const dadosSchema = new mongoose.Schema({
  
  campo1: { type: String, required: true },
  campo2: { type: Number, required: true },
  campo3: { type: Boolean, default: false },
  
});

const Dados = mongoose.model("Dados", dadosSchema);

export default Dados;
