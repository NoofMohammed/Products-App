const db = require("../../db/db");

const createNewBasket = (req, res) => {
  const { user_id,product_id } = req.body;
  
  const query = `INSERT INTO basket (user_id,product_id )VALUES(?,?)`;
  const data = [ user_id,product_id  ];

  db.query(query, data, (err, result) => {
    if (err) throw err;
    res.status(201).json(result);
    console.log(result, ";;;;;;");
  });
};

const getBasketById = (req, res) => {
  const id= req.params.id;
  
  const query = `SELECT * FROM basket where id=?`;
  
  db.query(query, [id], (err, result) => {
    if (err) throw err;
    res.status(201).json(result);
    console.log(result, ";;;;;;");
  });
};
module.exports = {
    createNewBasket,
    getBasketById
};