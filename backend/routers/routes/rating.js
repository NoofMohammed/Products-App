const express = require("express");
const {createNewRating,deleteRatingById,updateRatingById,getAllRating} = require("../controllers/rating");
const ratingRouter = express.Router();
ratingRouter.post("/",createNewRating);
ratingRouter.delete("/:id",deleteRatingById);
ratingRouter.put("/:id",updateRatingById);
ratingRouter.get("/",getAllRating);
module.exports=ratingRouter