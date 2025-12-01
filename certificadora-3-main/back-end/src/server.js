const express = require("express")

require("./config/database")

const usuarioRoutes = require("./routes/usuarios.routes");
const ideiasRoutes = require("./routes/ideias.routes");
const loginRoutes = require("./routes/authenticate.routes");

PORT = 3333

const app = express();

app.use(express.json());

app.use(usuarioRoutes);
app.use(ideiasRoutes);
app.use(loginRoutes);

app.listen(PORT, () => {
  console.log(`API Running on port ${PORT}`);
});