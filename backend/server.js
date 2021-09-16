const express = require('express');
const db = require('./db/db');
require('dotenv').config();

//routers

const app = express();
const  userRouter = require("./routers/routes/users")
const roleRouter = require("./routers/routes/role")
const productRouter = require("./routers/routes/product")
const basketRouter = require("./routers/routes/basket")
const commentRouter = require("./routers/routes/comments")
const loginRouter = require("./routers/routes/login")
const ratingRouter = require("./routers/routes/rating")
//built-in middlewares
app.use(express.json());
app.use("/user",userRouter) 
app.use("/role",roleRouter)
app.use("/product",productRouter)
app.use("/basket",basketRouter)
app.use("/comment",commentRouter)
app.use("/login",loginRouter)
app.use("/rating",ratingRouter)


// router middleware


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`server on ${PORT}`);
});





// const roleRouter = require("./routers/routes/role");
// const sliderRouter = require("./routers/routes/slider");
// const favoriteRouter = require("./routers/routes/favorite");
// const userRouter = require("./routers/routes/user");
// const ratingRouter = require("./routers/routes/rating");
// const loginRouter = require("./routers/routes/login");
// const placeRouter = require("./routers/routes/place");
// const occationRouter = require("./routers/routes/occation");
// const searchRouter = require("./routers/routes/search");

// // router middleware
// app.use("/role", roleRouter);
// app.use("/slider", sliderRouter);
// app.use("/", favoriteRouter);
// app.use("/user", userRouter);
// app.use("/rating", ratingRouter);
// app.use("/login", loginRouter);
// app.use(placeRouter);
// app.use("/occasions", occationRouter);
// app.use("/search", searchRouter);
// //app routers