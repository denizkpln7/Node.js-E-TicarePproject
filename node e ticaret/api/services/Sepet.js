const BaseService = require("./BaseService");
const BaseModel = require("../model/Sepet");

class Sepet extends BaseService{
    constructor(){
        super(BaseModel)
    }
}

module.exports = new Sepet;