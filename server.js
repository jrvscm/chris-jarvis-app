require('dotenv').config();

const express = require("express");
const fs = require('fs');
const request = require('request');
const path = require("path");
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const nodemailer = require('nodemailer');
//const twilio = require('twilio');
const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(morgan('common'));
app.use(bodyParser.json());

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID
};

const firebase = require('firebase');
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.database();

app.get('/home', (req, res) => {
  //TODO: add analytics here
  html = fs.readFileSync(`${__dirname}/build/index.html`, 'utf8');
    const _IMAGE_ = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1150197/github-profile-photo.jpg';
    const _DESCRIPTION_ = `Chris Jarvis is a Node.js and React/Redux developer from Gillette Wyoming. He enjoys traveling the far reaches of the earth and working remotely.`;
    const _URL_ = 'https://chrisjarvis.app';
    const _TITLE_ = 'Chris Jarvis';    
    
    const title = _TITLE_;
    const description = _DESCRIPTION_;
    const url = _URL_;
    const image = _IMAGE_;

    const keys = [_TITLE_, _DESCRIPTION_, _URL_, _IMAGE_];
    const values = [title, description, url, image];

      keys.map( (key, index) => {
        const value = values[index];
        html = html.replace(key, value);
      })

    res.send(html);
  })

app.post('/sendmessage', bodyParser.json(), (req, res) => {
  const auth = {
    type: 'OAuth2',
    user: process.env.REACT_APP_GMAIL_ADDRESS,
    clientId: process.env.REACT_APP_CLIENT_ID,
    clientSecret: process.env.REACT_APP_CLIENT_SECRET,
    refreshToken: process.env.REACT_APP_CLIENT_REFRESH_TOKEN
  }
  const mailOptions = {
    from: req.body.email,
    to: process.env.REACT_APP_GMAIL_ADDRESS,
    subject: `You have a new message from ${req.body.name}`,
    html: `<!DOCTYPE html>
          <html>
          <head>
            <title>Message from chrisjarvis.app</title>
          </head>
          <body>
          <div>
            <h1>From ${req.body.name}, ${req.body.email}, Subscribed: ${req.body.subscribe}</h1>
          <div>
          <div>
            <p>${req.body.message}</p>
          </body>
          </html>`
  };
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: auth
  });
  let responseMessage;
  transporter.sendMail(mailOptions, (error, info) => {
    if(error){
      responseMessage = `An error occurred ${error.message}`
    } else {
      responseMessage = `message sent ${info.response}`
    }
  })

  return res.json({
    message: 'success',
    email: responseMessage
  })
})

//TODO: Dynamically insert meta tags for blogposts 



app.use(express.static(path.resolve(__dirname, './build')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './build', 'index.html'));
});

console.log(`Listening on port ${PORT}`);
app.listen(PORT);

