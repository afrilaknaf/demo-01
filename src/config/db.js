const mongoose = require("mongoose")

const mongoosesdb = async () => {
    let url = process.env.MONGODBURL
    mongoose.connect(url).then(() => {
        console.log("Server Runinng Mongodb")
    }).catch((err) => {
        console.log(err)
    })
}

module.exports = mongoosesdb;