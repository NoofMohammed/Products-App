const db = require("../../db/db");
const bcrypt = require("bcrypt");
const createNewUser = async (req, res) => {
  console.log("wwwwwwwww");
  let { firstName, lastName, address, email, password } = req.body;
  const query = `INSERT INTO user (firstName,lastName,address ,email,password)
	VALUES (?,?,?,?,?)`;
  const salt = 10;
  password = await bcrypt.hash(password, salt);
  let data = [firstName, lastName, address, email, password];

  db.query(query, data, (err, result) => {
    if (err) throw err;
    res.status(201).json(result);
    console.log(result, "uuuser");
  });
};
const getUserById = (req, res) => {
  const { id } = req.params;
  const query = `SELECT * from user where id=?`;
  db.query(query, [id], (err, result) => {
    if (err) throw err;
    res.status(201).json(result);
    console.log(result, ";;;;;;");
  });
};
module.exports = {
  createNewUser,
  getUserById,
};
