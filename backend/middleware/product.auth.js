const { Product } = require("../models/product.model");
const { CreateProduct } = require("../types/product.validation");

const productmiddleware = async (req,res,next)=>{
    const name = req.body.name;
    
    const value = await Product.findOne({
        name : name
    })

    if (!value){
        next()
    }
    else{
        res.status(403).json({
            msg : "The Product Already Exist"
        })
    }
}

module.exports = {
    productmiddleware
}