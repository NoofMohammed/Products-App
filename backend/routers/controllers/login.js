const db = require("../../db/db")
const bcrypt = require("bcrypt");
const jwt =require("jsonwebtoken")

const login = async(req,res)=>{
const {email,password}= req.body;
const query = `SELECT * FROM user where email= ? `
const data = [email]
db.query(query,data, async(err, result) => {
    console.log(result,"ppppppppppppppppppp");
    if (!result[0]){
        res.status(404).json("The email not valide")
    }
    const match = await bcrypt.compare(password,result[0].password,(err,data)=>{
        console.log(data,"dataooooooooooooo")
        if(data){
            console.log(data,"data")
            const payload = {
                
              name:result[0].firstName,
              password: result[0].password,
            
            };
            const options = {
              expiresIn: "1d",
            };
            res.status(200).json({
              token: jwt.sign(payload, process.env.SECRET, options),
              user: result[0],
            });
          } else {
            res.status(403).json("The password is not correct");
          }
    });
})


    
}




module.exports={
    login
}