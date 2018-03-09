const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const layout = require('./views/layout');
const models = require('./models');
const PORT = 1337;

// models.authenticate()
//   .then(() => {
//   console.log('connected to the database');
// });

const init = async () => {
  await models.User.sync();
  await models.Page.sync();
  app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
  });
}

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

app.get('/', (req, res, next) => {
  // res.send("<h1>Hello World!</h1>");
  res.send(layout(''));
});


