const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({

     title:{
        type:String,
        required:true
    },

    brand:{
        type:String,
        required:true
    },

    category:String,

    model:String,

    price:{
        type:Number,
        required:true
    },

    discountPrice:Number,

    description:String,
    story:String,

    thumbnail:String,

    video:String,

    images:[String],

    highlights:[String],

    features:{
        movement:String,
        caseMaterial:String,
        strap:String,
        waterResistance:String,
        glass:String,
        dialColor:String,
        powerReserve:String,
        warranty:String
    },

    dimensions:{
        caseSize:String,
        thickness:String,
        weight:String
    },

    stock:Number,

    ratings:Number,

},{timestamps:true})

const Premium = new mongoose.model("premimum",ProductSchema)

module.exports=Premium