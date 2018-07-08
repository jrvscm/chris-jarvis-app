require('dotenv').config();

const express = require("express");
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

