var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET all valet stations */
router.get('/valet-stations', function (req, res, next) {
    res.send('send valet stations back');
});

module.exports = router;
