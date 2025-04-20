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

const productdeletemidddleware = async(req,res,next)=>{
    const {id} = req.params;

    const value = await Product.findOne({
        _id : id
    })
    
    if (value){
        next()
    }
    else{
        res.status(403).json({
            msg : "The Product Doesnt Exist"
        })
    }
}

module.exports = {
    productmiddleware,
    productdeletemidddleware
}