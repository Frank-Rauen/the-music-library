const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.redirect('/artists');
});

module.exports = router;
