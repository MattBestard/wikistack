const express = require('express');
const router = express.Router();
const addPage = require('../views/addPage');
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended: false}));

router.get('/', (req, res, next) => {
  // res.send('found the wiki page!')
  res.redirect('/');
});

router.post('/', (req, res, next) => {
  res.json(req.body);
});

router.get('/add', (req, res, next) => {
  res.send(addPage());
});

module.exports = router;
