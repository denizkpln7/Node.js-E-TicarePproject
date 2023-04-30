const User =require("../services/User")
const httpStatus = require("http-status")
const { passwordToHash, generateAccessToken, generateRefreshToken } = require("../utils/helper")


const create=(req,res,next)=>{
    const data=req.body
    console.log(data)
    data.password=passwordToHash(data.password)
    User.create(data).then((response)=>{
          res.status(httpStatus.CREATED).send(response)
     }).catch((err)=>{
         res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err)
     })
}


const login=(req,res)=>{

    const password=passwordToHash(req.body.password)
    User.loginUser(req.body).then((user)=>{
        if(!user)  return  res.status(httpStatus.BAD_REQUEST).send({err:"kullanıcı bulunamadı"})
        userData={
                ...user._doc,
                access_token:generateAccessToken(user),
                refresh_token:generateRefreshToken(user),
    
        }
        res.status(httpStatus.OK).send(userData)
    }).catch(err=>{
        return next(new ApiError(err,404))
        //res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err)
    })
}

const listUser=(req,res)=>{
    User.list().then(user=>{
        return res.status(httpStatus.OK).send(user)
    }).catch(err=>{
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err)
    })
}

module.exports={
    create,
    login,
    listUser
}