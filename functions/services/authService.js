const { firebaseApp } = require('./firebaseInitService');

exports.checkAuth = (req, res, next) => {
  let authorized = true;
  if (authorized) next();
  else {
    res.status(403);
    res.render('index', { error: 'Unauthorized access' });
    return;
  }
};

exports.signUp = async (email, password) => {
  try {
    const user = await firebaseApp.auth().createUserWithEmailAndPassword(email, password);
    this.authStatus = 'Authorized';
    return user;
  } catch (err) {
    this.authStatus = err;
  }
};

exports.signIn = async (email, password) => {
  try {
    const user = await firebaseApp.auth().signInWithEmailAndPassword(email, password);
    this.authStatus = 'Authorized';
    return user;
  } catch (err) {
    this.authStatus = err;
  }
};