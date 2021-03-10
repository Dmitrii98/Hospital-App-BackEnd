const Appointment = require('../../db/models/appointments/index');

module.exports.getAllAppointments = async (req, res, next) => {
  try {
    Appointment.find().then(result => {
      res.send({data: result});
    })
  } catch (e) {
    res.send({message: 'Server error'});
  }
};

module.exports.createAppointment = async (req, res, next) => {
  try {
    const appointment = new Appointment(req.body)
    await appointment.save().then(result => {
      res.send({data: result});
    })
  } catch (e) {
    res.status(422).send('Error! Params not correct');
  }
};

module.exports.deleteAppointment = (req, res, next) => {
  Appointment.deleteOne({_id: req.query.id}).then(result => {
    Appointment.find().then(result => {
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
