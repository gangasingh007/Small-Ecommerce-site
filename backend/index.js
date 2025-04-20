const express = require("express");
const Dbconnect = require("./config/db");
const dotenv = require("dotenv");
const { productmiddleware, productdeletemidddleware } = require("./middleware/product.auth");
const { CreateProduct } = require("./types/product.validation");
const { Product } = require("./models/product.model");
const productrouter = require("./routes/product.routes")

const app = express();
dotenv.config();

app.use("/api",productrouter)
app.use(express.json());


app.listen(3000,()=>{
    Dbconnect();
    console.log("The server has been started on port 3000")
})