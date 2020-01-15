const express = require('express');
const router = express.Router();
const artistsCtrl = require('../controllers/artists');

router.get('/', artistsCtrl.index);
router.get('/new', isLoggedIn, artistsCtrl.new);
router.get('/:id', artistsCtrl.show);
router.post('/', isLoggedIn, artistsCtrl.create);

function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()) return next();
    res.redirect('/auth/google');
}

module.exports = router;