const express = require("express");
const router = express.Router();
const {create,listUser,login,projectList,resetPassword,update,updateProfileImage}=require("../controller/User")
const autenticate=require('../middleware/authenticate')
const validate=require("../middleware/validate")
const schemas=require("../validation/User")


router
.route("/create")
.post(validate(schemas.createValidation),  create)

router.post("/login", login)

router
.route("/userpro")
.get(autenticate, listUser)

module.exports = router;