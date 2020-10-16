const { firebaseApp } = require('../index');
const firebase = require('firebase');
const auth = firebase.auth();

exports.checkAuth = (req, res, next) => {
  let authorized = true;
  if (authorized) next();
  else {
    res.status(403);
    res.render('index', { error: 'Unauthorized access' });
    return;
  }
};

exports.signIn = (email, password) => {
  return auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      this.authStatus = 'Authorized';
    }).catch((err) => {
      this.authStatus = err;
    });
};