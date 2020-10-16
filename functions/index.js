const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors({ origin: true }));
const env = require('dotenv');
env.config();

// FIREBASE MODULES
const admin = require('firebase-admin');
const functions = require('firebase-functions');
const firebaseApp = admin.initializeApp(functions.config().firebase)

app.set('view engine', 'ejs'); // TEMPLATE ENGINE
app.use('/', express.static('./public')); // STATICS

// ROUTES
const controller = require('./api/routes');

// FIRE CONTROLLERS
controller(app)

exports.app = functions.https.onRequest(app)