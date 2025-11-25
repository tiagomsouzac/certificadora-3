const mongoose = require("mongoose")

const IdeiaSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true
  },
  descriçao:{
    type: String,
    required: true
  },
  status:{
    type: String,
    required: true,
    enum: ["nova", "em análise", "aprovada", "reprovada"],
  }
},
{
  timestamps: true
}
)

module.exports = mongoose.model('ideias', IdeiaSchema)