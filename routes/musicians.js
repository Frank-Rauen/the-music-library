const express = require('express');
const router = express.Router();

const musiciansCtlr = require('../controllers/musicians');

router.get('/musicians/new', musiciansCtlr.new);
router.post('/musicians', musiciansCtlr.create);
router.post('/artists/:id/musicians', musiciansCtlr.addMusician);


module.exports = router;