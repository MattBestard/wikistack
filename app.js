const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const layout = require('./views/layout');
const { db } = require('./models');

db.authenticate().
then(() => {
  console.log('connected to the database');
})

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json())

app.get('/', (req, res, next) => {
  // res.send("<h1>Hello World!</h1>");
  res.send(layout(''));
});

const PORT = 1337;
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
