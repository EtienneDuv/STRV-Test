const { signIn } = require('../services/authService');

module.exports = (app, firebase) => {
  app.get('/', (req, res) => {
    res.status(200);
    res.render('index');
  });

  app.post('/signin', (req, res) => {
    signIn();
  });
};
