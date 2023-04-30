const BaseModel=require("../model/User")
const BaseService = require("./BaseService")

class User extends BaseService{
    constructor(){
       super(BaseModel)
    }

     loginUser (data){
     return this.BaseModel.findOne({email:data.email})
 }
}

module.exports=new User;

// const insert= async (data)=>{
//    const user= new User(data)
//    return await user.save()


   
// }



// const list =()=>{
//     return User.find()
// }

// const findUser=(where)=>{
//     return User.find(where)
// }



// module.exports={
//     insert,
//     loginUser,
//     list,
//     findUser
// }