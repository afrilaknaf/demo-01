const Premium = require("../models/premimum")

exports.addpremium= async(req,res)=>{
    let data = new Premium(req.body)
    await data.save()
    res.json({msg:"data Added to Premium",data})
}

exports.getpremium = async(req,res)=>{
    let data = await Premium.find()
    res.json({msg:"Data get Successfully",data})
}