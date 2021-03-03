const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const apiRoutes = require('./src/modules/routes/routes');

const uri = 'mongodb+srv://new_user:restart987@cluster0.aa65y.mongodb.net/HospitalProject?retryWrites=true&w=majority';
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true});

app.use(cors());
app.use(bodyParser.json());
app.use('/', apiRoutes);

app.listen(8000, () => {
  console.log('Server is working')
})