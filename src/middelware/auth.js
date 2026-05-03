const jwt = require("jsonwebtoken")

module.exports = (req,res,next)=>{
    const token = req.header("Authorization")
    if(!token){
        return res.json({msg:"No json web token send"})
    }
    const tokens = token.split(" ")[1];
    const decode = jwt.verify(tokens,process.env.SECRETKEY)
    req.user=decode
    console.log(req.user)
    next()
}