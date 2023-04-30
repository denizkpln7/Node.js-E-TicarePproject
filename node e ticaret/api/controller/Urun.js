const Urun =require("../services/Urun")
const httpStatus = require("http-status")



const create=(req,res)=>{
    const data=req.body
     Urun.create(data).then((response)=>{
          res.status(httpStatus.CREATED).send(response)
     }).catch((err)=>{
         res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err)
     })
}

const findOne=(req,res)=>{
    const id=req.params.id
    console.log(id)
    Urun.findUrun(id).then((response)=>{
          res.status(httpStatus.CREATED).send(response)
     }).catch((err)=>{
         res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err)
     })
}

const findAll=(req,res)=>{
    Urun.list().then((response)=>{
          res.status(httpStatus.CREATED).send(response)
     }).catch((err)=>{
         res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err)
     })
}


const findByCategoryProducts=(req,res)=>{
    const {category_id}=req.params
    console.log(category_id)
    Urun.findByCategoryProducts(category_id).then((response)=>{
          console.log(response)
          res.status(httpStatus.CREATED).send(response)
     }).catch((err)=>{
        return next(new ApiError(err,404))
     })
}

const findbyPrice=(req,res)=>{
    const {min,max}=req.body
    console.log(min,max)
    Urun.findbyPrice(min,max).then((response)=>{
          res.status(httpStatus.CREATED).send(response)
     }).catch((err)=>{
        return next(new ApiError(err,404))
     })
}



module.exports={
    create,
    findOne,
    findAll,
    findByCategoryProducts,
    findbyPrice
}