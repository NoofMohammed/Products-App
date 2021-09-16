
const express = require("express")
const {createNewUser,getUserById}= require("../controllers/users")
const userRouter = express.Router()
userRouter.post("/",createNewUser)
userRouter.get("/:id",getUserById)
module.exports=  userRouter