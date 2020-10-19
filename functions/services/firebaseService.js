const firebase = require('firebase');
const admin = require('firebase-admin');

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
exports.adminApp = admin.initializeApp(config);