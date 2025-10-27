const UsuarioModel = require("../model/usuario.model");

const notPermissionMessage = {
  error: "@user/not-Permission",
  message: "user not permission",
};

const list = async (request, response) => {
  try {
    const usuario = await UsuarioModel.find({}, { password: 0 });

    return response.json(usuario);
  } catch (err) {
    return response.status(400).json({
      error: "users/list",
      message: "Failed to list users",
    });
  }
};

const getById = async (request, response) => {
  const { id } = request.params;

  try {
    const usuario = await UsuarioModel.findById(id, { password: 0 });

    if (!usuario) {
      throw new Error();
    }

    return response.json(usuario);
  } catch (err) {
    return response.status(400).json({
      error: "@users/getById",
      message: err.message || `User not found ${id}`,
    });
  }
};

const create = async (request, response) => {
  const { nome, email, senha, cargo} = request.body;

  try {
    const usuario = await UsuarioModel.create({
      nome,
      email,
      senha,
      cargo,
    });
    return response.status(201).json(usuario);
  } catch (err) {
    return response.status(400).json({
      error: "@users/create",
      message: err.message || "Failed to create user, cargos devem ser professor ou aluno",
    });
  }
};

const update = async (request, response) => {
  const { id } = request.params;
  const { nome, email, senha, cargo} = request.body;
  const usuario = await UsuarioModel.findById(id, { password: 0 });


  if (!(usuario._id.toString() === id)) {
    return response.status(401).json(notPermissionMessage);
  }

  try {
    const usuarioUpdated = await UsuarioModel.findByIdAndUpdate(
      id,
      {
        nome,
        email,
        senha,
        cargo,
      },
      { new: true }
    );

    if (!usuarioUpdated) {
      throw new Error();
    }

    return response.json(usuarioUpdated);
  } catch (err) {
    return response.status(400).json({
      error: "@users/update",
      message: err.message || `User not found ${id}`,
    });
  }
};

const remove = async (request, response) => {
  const { id } = request.params;
  const usuario = await UsuarioModel.findById(id, { password: 0 });

  if (!(usuario._id.toString() === id)) {
    return response.status(401).json(notPermissionMessage);
  }

  try {
    const usuarioDeleted = await UsuarioModel.findByIdAndDelete(id);

    if (!usuarioDeleted) {
      throw new Error();
    }

    return response.status(204).send();
  } catch (err) {
    return response.status(400).json({
      error: "@users/remove",
      messaage: err.message || `User not found ${id}`,
    });
  }
};

module.exports = {
  list,
  getById,
  create,
  update,
  remove,
};
