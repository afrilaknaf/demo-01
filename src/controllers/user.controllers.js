const Users = require("../models/user")
const bcrypt = require("bcrypt")
const { json } = require("express")
const jwt = require("jsonwebtoken")


exports.register = async (req, res) => {
    const { Name, Email, Password, Role } = req.body

    let exist = await Users.findOne({ Email })
    if (exist) {
        res.json({ msg: "User Already exists" })
    }
    else {
        let hashes = await bcrypt.hash(Password, 10)
        const user = new Users({ Name, Email, Password: hashes, Role })
        await user.save()
        res.json({ msg: "Data of user Saved Successfully", user })
    }
}

exports.login = async (req, res) => {
    const { Email, Password } = req.body
    let exists = await Users.findOne({ Email })
    if (exists) {
        let passcheck = await bcrypt.compare(Password, exists.Password)
        if (passcheck) {
            const token = jwt.sign({
                id: exists._id, role: exists.Role
            }, process.env.SECRETKEY, { expiresIn: "1d" })
            res.json({ msg: "User Successfully Login", token })
        } else {
            res.json({ msg: "User Password Wrong" })
        }
    } else {
        res.json({ msg: "User Does't Exists" })
    }
}

exports.profile = async (req, res) => {
    console.log(req.user.id)
    let exist = await Users.findById(req.user.id)
    if (exist) {
        res.json({ msg: "Data Get Profile", exist })
    } else {
        res.json({ msg: "data wents something wrong" })
    }
}
