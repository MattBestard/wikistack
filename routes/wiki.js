const express = require('express');
const router = express.Router();
const addPage = require('../views/addPage');
const bodyParser = require('body-parser');
const { Page } = require('../models');
const wikipage = require('../views/wikipage');

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
    res.redirect(`/wiki/${page.slug}`);
  } catch (error) { next(error) };
});

router.get('/add', (req, res, next) => {
  res.send(addPage());
});

router.get('/:slug', async (req, res, next) => {
  // res.send(`you got to this: ${req.params.slug}`);
  try {
    const page = await Page.findOne({
      where: {
        slug: req.params.slug
      }});
      // res.json(page);
      res.send(wikipage(page));
  } catch (error) { next(error) }
});

module.exports = router;

