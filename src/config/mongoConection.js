import mongoose from "mongoose";



mongoose.connect("mongodb://127.0.0.1:27017/Dados");
//mongoose.connect("mongodb+srv://DadosUser:Z37Ds3xGjRMzeeuG@cluster23.paj9mri.mongodb.net/?retryWrites=true&w=majority");


let db = mongoose.connection

export default db;