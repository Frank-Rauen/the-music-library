const express = require('express');
const router = express.Router();
const albumsCtrl = require('../controllers/albums');

router.post('/artists/:id/albums', albumsCtrl.create);

module.exports = router;