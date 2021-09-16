const db = require("../../db/db");
const bcrypt = require("bcrypt");
const createNewUser = async (req, res) => {
  let { firstName, lastName, address, email, password, role_id } = req.body;
  const query = `INSERT INTO user (firstName,lastName,address ,email,password,role_id)
	VALUES (?,?,?,?,?,?)`;
  const salt = 10;
  password = await bcrypt.hash(password, salt);
  let data = [firstName, lastName, address, email, password, role_id];
  db.query(query, data, (err, result) => {
    if (err) throw err;
    res.status(201).json(result);
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
