const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors")
app.use(express.json())
app.use(cors())

//mongodb 
const mongoosesdb = require("./src/config/db")

const port = process.env.PORTNO;

mongoosesdb()

//mongodb 

// jwt authuser 

const authRoutes = require("./src/routes/user.routes")

app.use("/api", authRoutes)

// jwt authuser 

//Prdoucts 

const products = require("./src/routes/products.routes")

app.use("/products",products)

//Prdoucts 

//blog

const blog = require("./src/routes/blog.routes")

app.use("/blog",blog)


//premium 
const premium = require("./src/routes/premium.routes")

app.use("/premium",premium)

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});