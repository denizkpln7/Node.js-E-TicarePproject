const BaseModel=require("../model/Adres")
const BaseService = require("./BaseService")

class Adres extends BaseService{
    constructor(){
        super(BaseModel)
    }
}

module.exports=new Adres

// const insert= async (data)=>{
//    const user= new Adres(data)
//    return await user.save()
// }

// const findAdres= (where)=>{
//     return Adres.find(where)
// }

// const list =()=>{
//     return Adres.find()
// }



// module.exports={
//     insert,
//     findAdres,
//     list
// }