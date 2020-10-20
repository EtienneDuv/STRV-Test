const firebase = require('firebase');
const admin = require('firebase-admin');
const config = JSON.parse(process.env.FIREBASE_CONFIG);

exports.firebaseApp = firebase.initializeApp(config);
exports.adminApp = admin.initializeApp(config);