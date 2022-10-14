const mongoose = require("mongoose");
const bcript = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema({
  googleId: {
    type: String,
    required: false,
  },
  name: {
    type: String,
    required: [true, "Please provide a name"],
    minlength: 3,
    maxlenght: 50,
  },
  profile: {
    type: String,
    enum: ["admin", "aluno", "professor"],
    default: "aluno",
  },
  simulados: {
    type: [mongoose.Types.ObjectId],
    ref: "Simulado",
  },
  email: {
    type: String,
    required: [true, "Please provide an email"],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please provide a valid email",
    ],
    unique: true,
  },
  password: {
    type: String,
    minlength: 6,
  },
});

UserSchema.pre("save", async function (next) {
  if (this.googleId) {
    next();
  } else {
    const salt = await bcript.genSalt(10);
    this.password = await bcript.hash(this.password, salt);
  }

  next();
});

UserSchema.methods.createHash = function () {
  return jwt.sign(
    { id: this._id, name: this.name, profile: this.profile },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_LIFETIME,
    }
  );
};

UserSchema.methods.comparePasswords = async function (password) {
  const isMatch = await bcript.compare(password, this.password);
  return isMatch;
};

module.exports = mongoose.model("User", UserSchema);
