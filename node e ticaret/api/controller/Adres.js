const Adres =require("../services/Adres")
const {findUser} =require("../services/User")
const mongoose = require("mongoose");
const httpStatus = require("http-status")



const create=(req,res)=>{
    const data=req.body
     Adres.create(data).then((response)=>{
          res.status(httpStatus.CREATED).send(response)
          findUser({_id:req.user}).then(res=>{
            console.log(res)
             res[0].adres_id=response._id;
             res[0].save().then(res=>{
                console.log(res)
             })  
          })
     }).catch((err)=>{
         res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err)
     })
}




module.exports={
    create,
}