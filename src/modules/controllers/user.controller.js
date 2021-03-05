const User = require('../../db/models/users/index');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secretKey = 'secret-key';

module.exports.createUser = async (req, res, next) => {
  try {
    const {login, password} = req.body;
    const candidate = await User.findOne({login});
    if (candidate) {
      return res.status(400).send({error: 'User is already created'});
    }
    const hashPassword = await bcrypt.hash(password, 8);
    const user = new User({login, password: hashPassword});
    await user.save().then((result) => {
      res.send({data: result});
    });
  } catch (e) {
    res.send({message: 'Server error'});
  }
};

module.exports.loginUser = async (req, res, next) => {
  try {
    const {login, password} = req.body;
    const user = await User.findOne({login});
    if (!user) {
      return res.status(404).send({error: 'User is not found'});
    }
    const isPassValid = bcrypt.compareSync(password, user.password)
    if (!isPassValid) {
      return res.status(401).send({error: 'Invalid password'});
    }
    console.log(user)
    const token = jwt.sign({id: user._id}, secretKey, {expiresIn: '1h'});
    return res.json({
      token,
        _id: user._id,
        login: user.login,
    })
  } catch (e) {
    res.send({message: 'Server error'});
  }
};

// module.exports.getAllUsers = (req, res, next) => {
//   User.find().then(result => {
//     res.send({data: result});
//   })
// }

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