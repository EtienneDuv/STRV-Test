const { signIn, signUp } = require('../services/authService');

module.exports = (app, firebase) => {
  app.get('/', (req, res) => {
    res.status(200);
    res.render('index');
  });

  app.post('/signin', (req, res) => {
    const { email, password } = req.body;
    signIn(email, password)
      .then(res.render('index'));
  });

  app.post('/signup', (req, res) => {
    const { email, password } = req.body;
    signUp(email, password)
      .then(res.render('index'));
  });
};
