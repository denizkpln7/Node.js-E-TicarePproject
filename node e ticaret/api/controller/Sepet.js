const Sepet =require("../services/Sepet")
const httpStatus = require("http-status")



const create=(req,res)=>{
    const data=req.body
    console.log("sepet")
    Sepet.create(data).then((response)=>{
          res.status(httpStatus.CREATED).send(response)
     }).catch((err)=>{
         res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err)
     })
}

const findOne=(req,res)=>{
    const id=req.params.id
    Sepet.findCategor(id).then((response)=>{
          res.status(httpStatus.CREATED).send(response)
     }).catch((err)=>{
         res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err)
     })
}

const findAll=(req,res)=>{
    Sepet.list().then((response)=>{
          res.status(httpStatus.CREATED).send(response)
     }).catch((err)=>{
         res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err)
     })
}




module.exports={
    create,
    findOne,
    findAll
}