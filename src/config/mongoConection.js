import mongoose from "mongoose";

mongoose.connect("mongodb+srv://Usuario1:1234@to-do-list.xgrmd7m.mongodb.net/Tarefas");

let db = mongoose.connection

export default db;