const functions = require('firebase-functions');
const express = require('express');
const bodyparser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const { getCurrentUserToken } = require('./services/authService');
const app = express();

app.set('view engine', 'ejs'); // TEMPLATE ENGINE
app.use('/', express.static('./public')); // STATICS
app.use(cors({ origin: true }));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use('/', getCurrentUserToken);
app.use(session({
  secret: 'Hello-there',
  resave: false,
  saveUninitialized: true
}));
app.use((req, res, next) => {
  if (!req.session.err) req.session.err = "";
  return next();
});

// ROUTES
const controller = require('./api/routes');

// FIRE CONTROLLERS
controller(app);

exports.app = functions.https.onRequest(app);