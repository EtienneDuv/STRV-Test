const { signIn, signUp, checkAuth } = require('../services/authService');
const { saveContact } = require('../services/databaseService');

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.render('index', { error: req.cookies.__session });
  });

  app.post('/signin', async (req, res) => {
    const response = await signIn(req.body.email, req.body.password);
    if (response.code) {
      res.cookie('__session', response.code, {maxAge: 1000*60*2, overwrite: true});
      return res.redirect('/');
    }
    return res.redirect('/addressBook');
  });

  app.post('/signup', async (req, res) => {
    const response = await signUp(req.body.email, req.body.password);
    if (response.code) {
      res.cookie('__session', response.code, {maxAge: 1000*60*2, overwrite: true});
      return res.redirect('/');
    }
    return res.redirect('/addressBook');
  });

  app.get('/addressbook', checkAuth, (req, res) => {
    res.render('addressBook');
  });

  app.post('/newcontact', checkAuth, async (req, res) => {
    console.log(req.body);
    await saveContact(req.body);
    res.redirect('/addressbook');
  });
};
