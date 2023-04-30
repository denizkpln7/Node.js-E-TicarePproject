const mongoose = require("mongoose");

const AdresSchema = new mongoose.Schema(
    {
    title: {
        type: String,
        required: true,
    },
    explain:{
        type:String,
        require:true
    }
    },
    { timestamps: true }
  );
  
  module.exports = mongoose.model("Adres", AdresSchema);