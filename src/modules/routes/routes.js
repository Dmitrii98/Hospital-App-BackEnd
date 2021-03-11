const express = require('express');
const router = express.Router();

const {
  createUser,
  loginUser,
} = require('../controllers/user.controller');

const {
  getAllAppointments,
  createAppointment,
  deleteAppointment,
  updateAppointment
} = require('../controllers/appointment.controller');

router.post('/createUser', createUser);
router.post('/loginUser', loginUser);

router.get('/allAppointments', getAllAppointments);
router.post('/createAppointment', createAppointment);
router.patch('/updateAppointment', updateAppointment);
router.delete('/deleteAppointment', deleteAppointment);

module.exports = router;
