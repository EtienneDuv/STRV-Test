const express = require('express');
const env = require('dotenv');
const app = express();

app.set('view engine', 'ejs'); // TEMPLATE ENGINE
app.use('/', express.static('./public')); // STATICS

env.config();

// ROUTES
const controller = require('./api/routes');

// FIRE CONTROLLERS
controller(app);

// RUN
const server = app.listen(process.env.port, () => {
  const port = server.address().port;
  console.log(`Example app listening at http://localhost:${port}`);
});
