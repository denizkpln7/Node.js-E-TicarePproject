const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    full_name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    profile_iamge: {
      type: String,
    },
    adres_id: {
      type: mongoose.Types.ObjectId,
      ref: "Adres",
  },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);