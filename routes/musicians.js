const express = require('express');
const router = express.Router();

const musiciansCtlr = require('../controllers/musicians');

router.get('/musicians/new', musiciansCtlr.new);
router.post('/musicians', musiciansCtlr.create);

module.exports = router;