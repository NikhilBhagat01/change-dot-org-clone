const mongoose = require("mongoose");

const petitionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  target: { type: Number, required: true }, // e.g., number of signatures needed
  signaturesCount: { type: Number, default: 0 },
  category: { type: String, required: true },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  signatures: [{ type: mongoose.Schema.Types.ObjectId, ref: "Signature" }],
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
  createdAt: { type: Date, default: Date.now },
  status: { type: String, enum: ["open", "closed"], default: "open" },
});

module.exports = mongoose.model("Petition", petitionSchema);
