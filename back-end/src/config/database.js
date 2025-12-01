const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost/certificadora3"
)

mongoose.connection.on("connected", () => {
  console.log("Database connected succesfully")
})

mongoose.connection.on("error", (err) => {
  console.log("Failed to connect database", err)
})

