const mongoose = require("mongoose")

const userschema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
        trim: true
    },
    Email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    Password: {
        type: String,
        required: true,
        trim: true
    },
    Role: {
        type: String,
        enum: ["user", "admin"],
        default: "user",
        trim: true
    },
},
    {
        timestamps: true
    }
)

const users = mongoose.model("User", userschema)

module.exports = users;