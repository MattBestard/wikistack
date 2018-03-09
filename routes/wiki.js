const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('found the wiki page!')
});

router.post('/', (req, res, next) => {

});

router.get('/add', (req, res, next) => {
  res.send('found the add page');
});

module.exports = router;
