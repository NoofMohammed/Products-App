
const express = require("express");
const {createNewComment,getAllComment,deleteCommentById,updateCommentById } = require("../controllers/comments")
const commentRouter = express.Router()
commentRouter.post("/",createNewComment)
commentRouter.get("/",getAllComment)
commentRouter.delete("/:id",deleteCommentById)
commentRouter.put("/:id",updateCommentById )
module.exports=commentRouter