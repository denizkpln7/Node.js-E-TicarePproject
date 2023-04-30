const express = require("express");
const router = express.Router();
const {create,findOne,findAll}=require("../controller/Category")
const autenticate=require('../middleware/authenticate')
const validate=require("../middleware/validate")
// const schemas=require("../validation/User")


router
.route("/create")
.post(autenticate,  create)

// router.post("/login", login)

router
.route("/:id")
.get(autenticate, findOne)



router
.route("/")
.get(autenticate, findAll)

module.exports = router;