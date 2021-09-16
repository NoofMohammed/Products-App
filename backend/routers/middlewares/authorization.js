// const role = require('../controllers/role');

// const authorization = (string) => {
// 	return (req, res, next) => {
// 		role
// 			.findById(req.token.role)
// 			.then((result) => {
// 				if (!result.permissions.includes(string))
// 					return res.status(403).json({ message: 'forbidden' });

// 				next();
// 			})
// 			.catch((error) => {
// 				res.status(403).json({ message: 'forbidden' });
// 			});
// 	};
// };

// module.exports = authorization;
