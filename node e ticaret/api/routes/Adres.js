const express = require("express");
const router = express.Router();
const {create}=require("../controller/Adres")
const autenticate=require('../middleware/authenticate')
const validate=require("../middleware/validate")
// const schemas=require("../validation/User")


router
.route("/create")
.post(autenticate,  create)

// router.post("/login", login)

// router
// .route("/userpro")
// .get(autenticate, listUser)

module.exports = router;