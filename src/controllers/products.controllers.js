const Products = require("../models/product")

exports.createproducts = async(req,res)=>{
    let {images,details,price,category,stock} = req.body
    let data = new Products({images,details,price,category,stock})
    await data.save()
    res.json({msg:"data saved Successfully",data})
}

exports.getproducts = async(req,res)=>{
    let data = await Products.find()
    res.json({msg:"data getting successfully",data})
}

exports.quickview = async(req,res)=>{
    let {id} = req.params 
    const data = await Products.findById(id)
    res.json({msg:"Data products Get Successfullly",data})
}


