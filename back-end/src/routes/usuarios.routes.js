const { Router } = require("express");

const usuariosController = require("../controllers/usuarios.controllers");

const routes = Router();

routes.get("/users", usuariosController.list);

routes.post("/users", usuariosController.create);

routes.get("/users/:id", usuariosController.getById);

routes.put("/users/:id", usuariosController.update);

routes.delete("/users/:id", usuariosController.remove);

module.exports = routes;