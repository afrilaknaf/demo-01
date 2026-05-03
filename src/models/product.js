const mongoose = require("mongoose")

let productsschema = new mongoose.Schema({
    images: [{
        type: String,
        required: true,
    }],

    details: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    category: {
        type: String,
        required: true
    },

    stock: {
        type: Number,
        required: true,
        default: 0
    },
},{timestamps:true})

const Products = new mongoose.model("Products", productsschema)

module.exports = Products;