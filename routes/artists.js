const express = require('express');
const router = express.Router();
const artistsCtrl = require('../controllers/artists');

router.get('/', artistsCtrl.index);
router.post('/', artistsCtrl.create);

module.exports = router;