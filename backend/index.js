const express = require("express");
const Dbconnect = require("./config/db");
const dotenv = require("dotenv");
const { productmiddleware } = require("./middleware/product.auth");
const { CreateProduct } = require("./types/product.validation");
const { Product } = require("./models/product.model");

const app = express();
dotenv.config();

app.use(express.json());

app.post("/api/create",productmiddleware, async (req,res)=>{
    const paylod = req.body;
    const parsedpaylod = CreateProduct.safeParse(paylod);

    if(!parsedpaylod.success){
        res.status(200).json({
            msg:"Please send the right inputs"
        })
        return
    }
    else{
        try {
            const newProduct = await Product.create({
                name:paylod.name,
                price:paylod.price,
                image:paylod.image
            })
            console.log(newProduct)
            res.status(200).json({
                msg:"The Product Has been Created"                
            })
        } catch (error) {
            console.log("There was an error creating the product",error )
        }
    }
})

app.listen(3000,()=>{
    Dbconnect();
    console.log("The server has been started on port 3000")
})