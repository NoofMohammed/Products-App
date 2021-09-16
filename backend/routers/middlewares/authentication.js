const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;
const authentication = (req,res,next)=>{
	try {
		if (!req.headers.authorization)
			return res.status(403).json({ message: 'forbidden' });

const token = req.headers.authorization.split(" ").pop();
const parsedToken = jwt.verify(token, SECRET);
req.token = parsedToken;
next()
	}
	catch(error){
		res.status(403).json({ message: 'forbidden' });
	}
}
module.exports = authentication;


