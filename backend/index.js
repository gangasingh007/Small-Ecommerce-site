const express = require("express");
const Dbconnect = require("./config/db");
const dotenv = require("dotenv");
const { productmiddleware, productdeletemidddleware } = require("./middleware/product.auth");
const { CreateProduct } = require("./types/product.validation");
const { Product } = require("./models/product.model");
// const productrouter = require("./routes/product.routes")
const cors = require("cors")

const app = express();
app.use(cors())
app.use(express.json());
dotenv.config();

app.post("/create",productmiddleware, async (req,res)=>{
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

app.put("/update/:id",productdeletemidddleware,async (req,res)=>{
    const {id} = req.params;
    const product = req.body

    try {
        await Product.findByIdAndUpdate(id,product,{new:true})
        res.status(200).json({
            msg:"The Product has been updated"
        })
    } catch (error) {
        res.status(403).json({
            msg:"There was an error deleting the product"
        })
    }
})

app.get("/products", async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({
            products: products
        });
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch products", details: err.message });
    }
});


app.delete("/delete/:id",productdeletemidddleware,async(req,res)=>{
    const {id} = req.params;

    try {
        await Product.findByIdAndDelete(id) 
        res.status(200).json({
            msg:"The Product has been deleted"
        })
    } catch (error) {
        res.status(401).json({
            msg:"There was an error deleting tge product"
        })
    }
})


app.listen(3000,()=>{
    Dbconnect();
    console.log("The server has been started on port 3000")
})