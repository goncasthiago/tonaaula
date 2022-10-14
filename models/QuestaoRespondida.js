const mongoose = require("mongoose");

const QuestoesRespondidasSchema = new mongoose.Schema(
  {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "ID não recebido"],
    },
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
          isSelected: Boolean,
          isCorrect: Boolean,
        },
      ],
      minlength: 1,
      required: [true, "Providenciar as alternativas da questão"],
    },
    comentarios: {
      type: String,
      minlength: 2,
      required: [true, "Providenciar um comentário"],
    },
    respondida: {
      type: Boolean,
      default: true,
    },
    autor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: false,
    },
    createdAt: {
      type: Date,
    },
    updatedAt: {
      type: Date,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "QuestoesRespondidas",
  QuestoesRespondidasSchema
);
