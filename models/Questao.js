const mongoose = require("mongoose");

const QuestoesSchema = new mongoose.Schema(
  {
    enunciado: {
      type: String,
      minlength: 5,
      required: [true, "Providenciar o enunciado da questão"],
    },
    disciplina: {
      type: String,
      minlength: 5,
      required: [true, "Disciplina não recebida"],
    },
    assunto: {
      type: String,
      minlength: 5,
      required: [true, "Providenciar o assunto da questão"],
    },
    alternativas: {
      type: [
        {
          enunciado: String,
          isSelected: false,
          isCorrect: false,
        },
      ],
      minlength: 2,
      required: [true, "Providenciar as alternativas da questão"],
    },
    comentarios: {
      type: String,
      minlength: 2,
      required: [true, "Providenciar um comentário"],
    },
    autor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Usuário não recebido"],
    },
    respondida: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Questoes", QuestoesSchema);
