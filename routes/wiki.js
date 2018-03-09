const express = require('express');
const router = express.Router();
const addPage = require('../views/addPage');
const bodyParser = require('body-parser');
const { Page } = require('../models');

router.use(bodyParser.urlencoded({extended: false}));

router.get('/', (req, res, next) => {
  res.redirect('/');
});

router.post('/', async (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;
  const slug = title.replace(/\s/g, '_').replace(/\W/g, '');
  const page = new Page({ title, content, slug });
  try {
    await page.save();
    res.redirect('/');
  } catch (error) { next(error) };
});

router.get('/add', (req, res, next) => {
  res.send(addPage());
});

module.exports = router;
