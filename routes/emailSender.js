const nodemailer = require('nodemailer');
const { db } = require('../Models/UserModels');
const models = require('../Models/UserModels')
const User = require('mongoose').model('mytable');
const info = require('./routes/routes/currentinf')


const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'appfactory759@gmail.com',
    pass: 'Gijima2021'
  }
});

const mailOptions = {
  from: "n",
  to: 'myfriend@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

