const { firebaseApp, admin } = require('./firebaseInitService');

exports.checkAuth = (req, res, next) => {
  let authorized = true;
  if (authorized) next();
  else {
    res.status(403);
    res.render('index', { error: 'Unauthorized access' });
    return;
  }
};

exports.signUp = (email, password) => {
  return admin.auth().createUser({
    email: email,
    password: password
  });
};

exports.signIn = (email, password) => {
  return admin.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      this.authStatus = 'Authorized';
    }).catch((err) => {
      this.authStatus = err;
    });
};