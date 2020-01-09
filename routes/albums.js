const express = require('express');
const router = express.Router();
const albumsCtlr = require('../controllers/albums');

router.post('/artists/:id/albums', albumsCtlr.create);

module.exports = router;