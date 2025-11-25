const { Router } = require("express");

const ideiasController = require("../controllers/ideias.controllers");

const routes = Router();

routes.get("/ideias", ideiasController.list);

routes.post("/ideias", ideiasController.create);

routes.get("/ideias/:id", ideiasController.getById);

routes.put("/ideias/:id", ideiasController.update);

routes.delete("/ideias/:id", ideiasController.remove);

module.exports = routes;