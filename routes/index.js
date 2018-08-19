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

router.get('/valet-stations/:id', function (req, res, next) {
    queries.getSingle(req.params.id)
        .then(function (station) {
            res.status(200).json(station);
        })
        .catch(function (error) {
            next(error);
        });
});

router.post('/valet-stations', function(req, res, next) {
    queries.add(req.body)
        .then(function(stationID) {
            return queries.getSingle(stationID);
        })
        .then(function(station) {
            res.status(200).json(station);
        })
        .catch(function(error) {
            next(error);
        });
});

// *** update show *** //
router.put('/valet-stations/:id', function(req, res, next) {
    queries.update(req.params.id, req.body)
        .then(function() {
            return queries.getSingle(req.params.id);
        })
        .then(function(show) {
            res.status(200).json(show);
        })
        .catch(function(error) {
            next(error);
        });
});

module.exports = router;
