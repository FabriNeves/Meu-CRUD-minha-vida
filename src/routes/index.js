import  express  from "express";
import  crudRouter from "./dadosRoutes.js"

const routes = (app) => {
    app.route('/').get((req,res) => {
        res.status(200).send({titulo:"Dados"});
    })

    app.use(
        express.json(),
        crudRouter
    )
}

export default routes;
