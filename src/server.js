require('dotenv').config();

const express = require("express");
const path = require("path");
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
//const twilio = require('twilio');
const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(bodyParser.json());

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID
};


const transporter = nodemailer.createTransport({
  service: 'gmail',
  secure: false,
  port: 25,
  auth: {
    user: 'chrisjarvisdev@gmail.com',
    pass: process.env.REACT_APP_GMAIL_PASSWORD, 
  },
  tls:{
    rejectUnauthorized: false
  }
});
const HelperOptions = {
  from: 'Chris Jarvis' 'chrisjarvisdev@gmail.com',
  to: 'chrisjarvisdev@gmail.com',
  subject: 'Hello World',
  text: 'Wow an email came through.'
};
transporter.sendMail(HelperOptions, (error, info) => {
  if(error){
    return console.log(error)
  } else {
    console.log('success')
    console.log(info)
  }
})

app.use(express.static(path.resolve(__dirname, './build')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './build', 'index.html'));
});

console.log(`Listening on port ${PORT}`);
app.listen(PORT);

