const mongoose = require("mongoose");

const SepetSchema = new mongoose.Schema(
    {
    user_id: {
        type: mongoose.Types.ObjectId,
        ref: "User",
    },
    urunler: [{
        type: mongoose.Types.ObjectId,
        ref: "Urunler",
    }],
    },
    { timestamps: true }
  );
  
  module.exports = mongoose.model("Sepet", SepetSchema);