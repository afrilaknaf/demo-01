const express = require("express")
const router = express.Router()

const {wishlist_add,wishlist_get} = require("../controllers/wishlist.controllers")

router.post("/post",wishlist_add)

router.get("/get",wishlist_get)

module.exports=router
