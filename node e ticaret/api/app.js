const express = require('express')
const app = express()
const cors=require('cors')
const mongoose=require('mongoose')
const helmet = require("helmet");
const errorHandler=require("./middleware/errorHandler")
const User=require('./routes/User')
const Adres=require('./routes/Adres')
const Category=require('./routes/Category')
const Urun=require('./routes/Urun')
const Sepet=require('./routes/Sepet')


app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(errorHandler);

app.use("/users", User);
app.use("/adres",Adres)
app.use("/category",Category)
app.use("/urun",Urun)
app.use("/sepet",Sepet)


const connect = async () => {
    try {
      mongoose.set("strictQuery", false);
      await mongoose.connect("mongodb+srv://deniz:deniz@cluster0.dzdbj.mongodb.net/test?retryWrites=true&w=majority");
      // await mongoose.connect("mongodb://deniz:deniz@main-shard-00-00-03xkr.mongodb.net:27017,main-shard-00-01-03xkr.mongodb.net:27017,main-shard-00-02-03xkr.mongodb.net:27017/main?ssl=true&replicaSet=Main-shard-0&authSource=admin&retryWrites=true");
      console.log("Connected to mongoDB.");
    } catch (error) {
      throw error;
    }
  };
  
  mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected!");
  });



app.listen(3000,()=>{
    connect()
    console.log("backend çalışıyor")
})