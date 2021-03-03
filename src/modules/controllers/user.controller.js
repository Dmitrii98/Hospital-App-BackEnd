const User = require('../../db/models/users/index');
const bcrypt = require('bcryptjs');

module.exports.getAllUsers = (req, res, next) => {
  User.find().then(result => {
    res.send({data: result});
  })
}

module.exports.createUser = async (req, res, next) => {
  const {login, password} = req.body;
  const hashPassword = await bcrypt.hash(password, 15);
  const user = new User({login, password: hashPassword});
  await user.save().then(() => {
    User.find().then(result => {
      res.send({data: result});
    });
  });
};

// module.exports.updateItem = (req, res, next) => {
//   Purchase.updateOne({_id: req.body._id},req.body).then(result => {
//     Purchase.find().then(result => {
//       res.send({data: result});
//     });
//   });
// };
//
// module.exports.deleteItem = (req, res, next) => {
//   Purchase.deleteOne({_id: req.query.id}).then(result => {
//     Purchase.find().then(result => {
//       res.send({data: result});
//     });
//   });
// };