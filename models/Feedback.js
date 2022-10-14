const mongoose = require("mongoose");

const FeedbackSchema = new mongoose.Schema(
  {
    tipo: {
      type: String,
      required: [true, "Favor preencher o tipo"],
    },
    mensagem: {
      type: String,
      minlength: 2,
      required: [true, "Favor preencher a mensagem"],
    },
    autor: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Usuário não recebido"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Feedback", FeedbackSchema);
