const express = require("express")
const router = express.Router()

const {addpremium,getpremium} = require("../controllers/permium.controllers")

router.post("/add",addpremium)

router.get("/get",getpremium)

module.exports=router