const mongoose = require("mongoose");

const SimuladoRespondidoSchema = new mongoose.Schema(
  {
    idSimulado: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "ID não recebido"],
    },
    duracao: {
      type: Number,
      required: [true, "Tempo não recebido"],
    },
    data: {
      type: Date,
      required: [true, "Data não recebida"],
    },
    questoes: {
      type: Array,
      ref: 'QuestoesRespondidas'
    },
    professor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Professor não recebido"],
    },
    progresso: {
      type: Number,
      required: [true, "Progresso não recebido"],
    },
    nome: {
      type: String,
      minlength: 3,
      required: [true, "Providenciar o nome do Simulado"],
    },
    descricao: {
      type: String,
      minlength: 3,
      required: [true, "Providenciar a descrição do simulados"],
    },
    duracao: {
      type: Number,
      default: 100,
    },
    data_fim: {
      type: Date,
      required: [true, "Informe a data de finalização do simulado"],
    },
    data_criacao: {
      type: Date,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: false,
    },
    qtd_questoes: {
      type: Number,
      required: [true, "Quantidade de questões não recebida"],
    }
  },
  { timestamps: true }
);
module.exports = mongoose.model("SimuladoRespondido", SimuladoRespondidoSchema);
