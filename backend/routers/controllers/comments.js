const db = require("../../db/db");
const createNewComment = (req, res) => {
  const { comment, user_id } = req.body;
  const query = `INSERT INTO comment (comment,user_id)
	VALUES (?,?)`;
  const data = [comment, user_id];
  db.query(query, data, (err, result) => {
    if (err) throw err;
    res.status(201).json(result);
  });
};
const getAllComment = (req, res) => {
  const query = `SELECT * FROM comment`;
  db.query(query, (err, result) => {
    if (err) throw err;
    res.status(201).json(result);
  });
};
const deleteCommentById = (req, res) => {
  const { id } = req.params;
  const query = `DELETE FROM comment WHERE id=${id}`;
  db.query(query, (err, result) => {
    if (err) throw err;
    res.status(201).json(result);
  });
};
const updateCommentById = (req, res) => {
  const { id } = req.params;
  const { comment } = req.body;
  const query = `UPDATE comment
SET comment=?
WHERE id=${id}`;
  const data = [comment];
  db.query(query, data, (err, result) => {
    if (err) throw err;
    res.status(201).json(result);
  });
};
module.exports = {
  createNewComment,
  getAllComment,
  deleteCommentById,
  updateCommentById,
};
