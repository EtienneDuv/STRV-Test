const firebase = require('firebase/app');
require("firebase/auth");
require("firebase/database");

const env = require('dotenv');
env.config();

const config = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  databaseURL: process.env.databaseURL,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId
};
exports.firebaseApp = firebase.initializeApp(config);
