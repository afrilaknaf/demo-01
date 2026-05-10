const express = require("express")
const router = express.Router()

const {addpremium,getpremium,getidpremium} = require("../controllers/permium.controllers")

router.post("/add",addpremium)

router.get("/get",getpremium)

router.get("/getid/:id",getidpremium)

module.exports=router