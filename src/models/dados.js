import mongoose from "mongoose";

const dadosSchema = new mongoose.Schema({
  campoString: {
    type: String,
    required: [true, "Campo String requerido"]
  },
  campoNumber: {
    type: Number,
    required: [true, "Campo Number requerido"]
  },
  campoBoolean: {
    type: Boolean,
    default: false
  },
  campoDate: {
    type: Date,
    default: Date.now
  },
  campoArray: {
    type: Array
  },
  campoObject: {
    type: Object
  }
});

const Dados = mongoose.model("Dados", dadosSchema);

export default Dados;