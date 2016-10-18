var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/home', function(req, res, next) {
    res.render('index.html');
});

router.get('/*', function(req, res) {
    res.render('index.html');
});

module.exports = router;
