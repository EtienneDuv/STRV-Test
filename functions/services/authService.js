const session = require('express-session');
const { firebaseApp, adminApp } = require('./firebaseService');

exports.getCurrentUserToken = async (req, res, next) => {
  try {
    if (firebaseApp.auth().currentUser && firebaseApp.auth().currentUser != null) {
      req.headers.authtoken = await firebaseApp.auth().currentUser.getIdToken(true);
      return next();
    }
    return next();
  } catch (err) {
    console.log(err);
    req.session.err = err;
    res.redirect('/');
  }
};

exports.checkAuth = async (req, res, next) => {
  try {
    if (req.headers.authtoken) {
      await adminApp.auth().verifyIdToken(req.headers.authtoken);
      next();
    }
    else {
      res.status(403);
      res.render('index', { error: 'Not connected/Unauthorized' });
      return;
    }
  } catch (err) {
    console.log(err);
    req.session.err = err;
    res.redirect('/');
  }
};

exports.signUp = async (email, password) => {
  try {
    return await firebaseApp.auth().createUserWithEmailAndPassword(email, password);
  } catch (err) {
    console.log(err);
    return err;
  }
};

exports.signIn = async (email, password) => {
  try {
    return await firebaseApp.auth().signInWithEmailAndPassword(email, password);
  } catch (err) {
    console.log(err);
    return err;
  }
};