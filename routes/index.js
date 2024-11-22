var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/api/add', function(req, res, next) {
  const { number1, number2 } = req.body;

  if (typeof number1 === 'number' && typeof number2 === 'number') {
      const sum = number1 + number2;
      return res.status(200).json({ sum });
  } else {
      return res.status(400).json({ error: 'Invalid input. Please provide two numbers.' });
  }
});

module.exports = router;
