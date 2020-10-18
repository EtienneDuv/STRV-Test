const admin = require('firebase-admin');
const firebaseApp = admin.initializeApp();

module.exports = {
  admin: admin,
  firebaseApp: firebaseApp
};
