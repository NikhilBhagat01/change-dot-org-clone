const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    index: true,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: { type: String },
  petitionsCreated: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Petition",
  },

  petitionsSigned: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Petition",
  },
});

module.exports = mongoose.model("User", userSchema);
