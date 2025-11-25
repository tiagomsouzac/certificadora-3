const IdeiaModel = require("../model/ideia.model");

const notPermissionMessage = {
  error: "@ideias/not-Permission",
  message: "user not permission",
};

const list = async (request, response) => {
  try {
    const ideia = await IdeiaModel.find({});

    return response.json(ideia);
  } catch (err) {
    return response.status(400).json({
      error: "ideias/list",
      message: "Failed to list ideias",
    });
  }
};

const getById = async (request, response) => {
  const { id } = request.params;

  try {
    const ideia = await IdeiaModel.findById(id);

    if (!ideia) {
      throw new Error();
    }

    return response.json(ideia);
  } catch (err) {
    return response.status(400).json({
      error: "@ideias/getById",
      message: err.message || `ideia not found ${id}`,
    });
  }
};

const create = async (request, response) => {
  const { titulo, descriçao, status, } = request.body;
  
  try {
    const ideia = await IdeiaModel.create({
      titulo, 
      descriçao, 
      status
    });
    return response.status(201).json(ideia);
  } catch (err) {
    return response.status(400).json({
      error: "@ideias/create",
      message: err.message || "Failed to create ideias, status deve ser nova, em análise, aprovada, reprovada",
    });
  }
};

const update = async (request, response) => {
  const { id } = request.params;
  const { titulo, descriçao, status} = request.body;

  try {
    const ideiaUpdated = await IdeiaModel.findByIdAndUpdate(
      id,
      {
        titulo, 
        descriçao,  
        status
      },
      { new: true }
    );

    if (!ideiaUpdated) {
      throw new Error();
    }

    return response.json(ideiaUpdated);
  } catch (err) {
    return response.status(400).json({
      error: "@ideias/update",
      message: err.message || `ideia not found ${id}`,
    });
  }
};

const remove = async (request, response) => {
  const { id } = request.params;

  try {
    const ideiaDeleted = await IdeiaModel.findByIdAndDelete(id);

    if (!ideiaDeleted) {
      throw new Error();
    }

    return response.status(204).send();
  } catch (err) {
    return response.status(400).json({
      error: "@ideias/remove",
      messaage: err.message || `ideia not found ${id}`,
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
