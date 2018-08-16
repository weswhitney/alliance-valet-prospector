var express = require('express');
var router = express.Router();

var queries = require('../db/queries');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET all valet stations */
router.get('/valet-stations', function (req, res, next) {
    queries.getAll()
        .then(function (stations) {
            res.status(200).json(stations);
        })
        .catch(function (error) {
            next(error);
        });
});

module.exports = router;
