const { signIn, signUp, checkAuth } = require('../services/authService');

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.render('index', { error: req.session.err });
  });

  app.post('/signin', async (req, res) => {
    const response = await signIn(req.body.email, req.body.password);
    if (response.code) {
      req.session.err = response.code;
      return res.redirect('/');
    }
    return res.redirect('/addressBook');
  });

  app.post('/signup', async (req, res) => {
    const response = await signUp(req.body.email, req.body.password);
    if (response.code) {
      req.session.err = response.code;
      return res.redirect('/');
    }
    return res.redirect('/addressBook');
  });

  app.get('/addressbook', checkAuth, (req, res) => {
    res.render('addressBook');
  });
};
