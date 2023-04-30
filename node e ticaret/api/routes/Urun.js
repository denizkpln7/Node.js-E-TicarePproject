const express = require("express");
const router = express.Router();
const {create,findOne,findAll,findByCategoryProducts,findbyPrice}=require("../controller/Urun")
const autenticate=require('../middleware/authenticate')
const validate=require("../middleware/validate")
// const schemas=require("../validation/User")


router
.route("/create")
.post(autenticate,  create)

router
.route("/findbyPrice")
.get(autenticate, findbyPrice)

router
.route("/getallProducts")
.get(autenticate,  findAll)


router
.route("/:id")
.get(autenticate, findOne)

router
.route("/getbycategoryproduct/:category_id")
.get(autenticate, findByCategoryProducts)





module.exports = router;