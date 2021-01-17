var express = require('express');
var router = express.Router();
const photos = require('./photos')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// mine
router.get('/other', photos.list)

module.exports = router;
