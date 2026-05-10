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

exports.getidpremium = async(req,res)=>{
    let {id} = req.params 
    const data = await Premium.findById(id)
    res.json({msg:"Products Getting successfully",data})
}