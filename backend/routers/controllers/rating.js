const db = require("../../db/db");
const createNewRating = (req,res) =>{
    const {rate,user_id}= req.body;
    const query = `INSERT INTO rating (rate,user_id) VALUES(?,?)`;
    const data = [rate,user_id];
    db.query(query,data,(err,result)=>{
        if (err) throw err;
        res.status(201).json(result)
    })

}
const deleteRatingById = (req,res)=>{
const {id} = req.params;
const query = `DELETE FROM rating where id=${id}`;
db.query(query, (err,result)=>{
    if (err) throw err;
    res.status(201).json(result)
})
} 
const updateRatingById = (req,res)=>{
const {id} = req.params;
const {rate}= req.body;
const data = [rate]
const query = `UPDATE rating set rate=? where id=${id}`;
db.query(query,data, (err,result)=>{
    if(err) throw err;
    res.status(201).json(result)
})
} 
const getAllRating = (req,res)=>{
const query =  `SELECT * from rating`;
db.query(query,(err,result)=>{
    if(err) throw err;
    res.status(201).json(result)
})
} 
module.exports={
    createNewRating,
    deleteRatingById,
    updateRatingById,
    getAllRating
}