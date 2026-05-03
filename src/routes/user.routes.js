const express = require("express")
const router = express.Router()

const {register,login,profile} = require("../controllers/user.controllers")

const auth = require("../middelware/auth")

router.post("/register",register)

router.post("/login",login)

router.get("/profile",auth,profile)

module.exports=router;