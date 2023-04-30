const Category =require("../services/Category")
const httpStatus = require("http-status")



const create=(req,res)=>{
    const data=req.body
    Category.create(data).then((response)=>{
          res.status(httpStatus.CREATED).send(response)
     }).catch((err)=>{
         res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err)
     })
}

const findOne=(req,res)=>{
    const id=req.params.id
    Category.findCategor(id).then((response)=>{
          res.status(httpStatus.CREATED).send(response)
     }).catch((err)=>{
         res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err)
     })
}

const findAll=(req,res)=>{
    console.log("hii")
    Category.list().then((response)=>{
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