const { firebaseApp, adminApp } = require('./firebaseService');

/**
 * @description Middleware putting UserId, 
 * if connected, in header for authorization check
 */
exports.getCurrentUserToken = async (req, res, next) => {
  try {
    if (firebaseApp.auth().currentUser && firebaseApp.auth().currentUser != null) {
      req.headers.authtoken = await firebaseApp.auth().currentUser.getIdToken(true);
      return next();
    }
    return next();
  } catch (err) {
    console.log(err);
    res.cookie('__session', err, {maxAge: 1000*60*2, overwrite: true});
    res.redirect('/');
  }
};

/**
 * @description Middleware used to secure some pages, checking 
 * if user is connected and allowed
 */
exports.checkAuth = async (req, res, next) => {
  try {
    if (req.headers.authtoken) {
      await adminApp.auth().verifyIdToken(req.headers.authtoken);
      next();
    }
    else {
      res.status(403);
      res.cookie('__session', 'Not connected/Unauthorized', {maxAge: 1000*60*2, overwrite: true});
      res.redirect('/');
      return;
    }
  } catch (err) {
    console.log(err);
    res.cookie('__session', err, {maxAge: 1000*60*2, overwrite: true});
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