const express = require("express")
const router = express.Router()

const {wishlist_add} = require("../controllers/wishlist.controllers")

router.post("/post",wishlist_add)

module.exports=router
