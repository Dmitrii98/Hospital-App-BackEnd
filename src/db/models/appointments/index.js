const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
  fullName: String,
  doctor: String,
  date: Date.parse(),
  complaint: String
});

module.exports = Appointment = mongoose.model('appointments', appointmentSchema);