const mongoose = require("mongoose")

const wishlist_Schema = mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        required:true
    },
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    producttype:{
        type:String,
        enum:["premium","normal"],
        required:true
    }
},{timestamps:true})

wishlist_Schema.index({userId:1,productId:1,producttype:1},{ unique:true })

const wishlist = new mongoose.model("wishlist",wishlist_Schema)

module.exports = wishlist