const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json())

app.get('/', (req, res, next) => {
  res.send("<h1>Hello World!</h1>");
});

const PORT = 1337;
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
