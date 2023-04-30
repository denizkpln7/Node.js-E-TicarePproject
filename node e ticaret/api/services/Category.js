const BaseModel = require("../model/Category");
const BaseService = require("./BaseService");

class Category extends BaseService {
    constructor() {
        super(BaseModel)
    }

    findCategor(id) {
        return this.BaseModel.findOne({ _id: id })
    }

    

}
module.exports = new Category;

// const insert= async (data)=>{
//    const category= new Category(data)
//    return await category.save()
// }

// const findCategory= (id)=>{
//     return Category.findOne({_id:id})
// }

// const list =()=>{
//     return Adres.find()
// }



// module.exports={
//     insert,
//     findCategory,
//     list
// }