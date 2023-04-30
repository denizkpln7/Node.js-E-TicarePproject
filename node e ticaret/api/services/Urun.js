const BaseModel = require("../model/Urun");
const BaseService = require("./BaseService");

class Urun extends BaseService {
    constructor() {
        super(BaseModel);
    }

    findUrun (id){
        return this.BaseModel.findOne({ _id: id }).populate({
            path: "category_id",
        })
    }

    findByCategoryProducts(category_id){
        return this.BaseModel.find({category_id:category_id}).populate({
            path: "category_id",
        })
    }

    findbyPrice(min,max){
        return this.BaseModel.find({price : {$gte:min, $lte:max}}).populate({
            path: "category_id",
            match: {aciklama: {$ne:'Ev'}}
        })
    }


}

module.exports = new Urun;


// const insert= async (data)=>{
//    const urun= new Urun(data)
//    return await urun.save()
// }

// const findUrun= (id)=>{
//     return Urun.findOne({_id:id}).populate({
//         path: "category_id",
//     })
// }

// const list =()=>{
//     return Urun.find()
// }



// module.exports={
//     insert,
//     findUrun,
//     list
// }