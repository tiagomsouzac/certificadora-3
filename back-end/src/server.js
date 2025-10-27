const express = require("express")

require("./config/database")

const usuarioRoutes = require("./routes/usuarios.routes");

PORT = 3333

const app = express();

app.use(express.json());

app.use(usuarioRoutes);

app.listen(PORT, () => {
  console.log(`API Running on port ${PORT}`);
});