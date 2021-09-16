const db = require("../../db/db");

const createNewProduct = (req, res) => {
  const { name, image, description, type, size, price } = req.body;
  console.log(req.body, "body");
  const query = `INSERT INTO Product (name,image,description,type,size,price)VALUES(?,?,?,?,?,?)`;
  const data = [ name, image, description, type, size, price ];
  db.query(query, data, (err, result) => {
    if (err) throw err;
    res.status(201).json(result);
    console.log(result, ";;;;;;");
  });
};
const getAllProduct = (req, res) => {
  const query = `SELECT * from product`;
  db.query(query,(err, result) => {
    if (err) throw err;
    res.status(201).json(result);
    console.log(result, ";;;;;;");
  });
};
const getProductById = (req, res) => {
  const {id} = req.params;
  const query = `SELECT * from product where id=?`
  db.query(query, [id], (err, result) => {
    if (err) throw err;
    res.status(201).json(result);
    console.log(result, ";;;;;;");
  });
};
module.exports = {
  createNewProduct,
  getAllProduct,
  getProductById 
};
