const express = require('express');
const router = express.Router();

const {
  getAllUsers,
  createUser,
  deleteUser
} = require('../controllers/user.controller');

router.get('/allUsers', getAllUsers);
router.post('/createUser', createUser);
// router.delete('/deleteUser', deleteUser);

module.exports = router;
