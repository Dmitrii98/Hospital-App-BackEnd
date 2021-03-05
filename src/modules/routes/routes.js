const express = require('express');
const router = express.Router();

const {
  getAllUsers,
  createUser,
  loginUser,
} = require('../controllers/user.controller');

// router.get('/allUsers', getAllUsers);
router.post('/createUser', createUser);
router.post('/loginUser', loginUser);

module.exports = router;
