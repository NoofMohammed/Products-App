const express = require("express");
const {createNewBasket,getBasketById} = require("../controllers/basket")
const basketRouter = express.Router()
basketRouter.post("/",createNewBasket)
basketRouter.get("/:id",getBasketById)
module.exports=basketRouter