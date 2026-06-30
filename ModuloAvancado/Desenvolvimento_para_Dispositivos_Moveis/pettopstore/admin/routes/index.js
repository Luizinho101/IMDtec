var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Pet Top Store',
    employee: res.locals.employee // Pegando o funcionário que o middleware salvou
  });
});

module.exports = router;