const firebase = require('firebase');
const admin = require('firebase-admin');
const env = require('firebase-functions').config();

const config = { ...env };

exports.firebaseApp = firebase.initializeApp(config);
exports.adminApp = admin.initializeApp(config);