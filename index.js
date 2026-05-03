const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors")
app.use(express.json())
app.use(cors())

const mongoosesdb = require("./src/config/db")

const port = process.env.PORTNO;

mongoosesdb()

const authRoutes = require("./src/routes/user.routes")

app.use("/api", authRoutes)

const products = require("./src/routes/products.routes")

app.use("/products",products)

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});