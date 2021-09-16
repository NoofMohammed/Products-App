
const express = require("express")
const {createNewProduct,getAllProduct,getProductById }= require("../controllers/product")
const productRouter = express.Router()
productRouter.post("/",createNewProduct)
productRouter.get("/",getAllProduct)
productRouter.get("/:id",getProductById )
module.exports=  productRouter