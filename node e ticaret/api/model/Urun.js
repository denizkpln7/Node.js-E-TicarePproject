const mongoose = require("mongoose");

const UrunSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
   category_id:{
    type: mongoose.Types.ObjectId,
    ref: "Category",
   }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Urun", UrunSchema);