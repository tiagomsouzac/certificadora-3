const UserModel = require("../model/usuario.model");

const login = async (request, response) => {
  const { email, password} = request.body;

  const user = await UserModel.findOne({ email });

  const loginErrorMessage = {
    error: "@authenticate/login",
    message: "Invalid email or password",
  };

  if (!user) {
    return response.status(400).json(loginErrorMessage);
  }

  if (user.senha !== password) {
    return response.status(400).json(loginErrorMessage);
  }

  return response.status(200).json({
    message: "Login successful",
    user: {
      id: user._id,
      nome: user.nome,
      email: user.email,
    }
  });
};

module.exports = {
  login,
};
