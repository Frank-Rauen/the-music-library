const express = require('express');
const router = express.Router();
const albumsCtrl = require('../controllers/albums');

router.post('/artists/:id/albums', isLoggedIn, albumsCtrl.create);

function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()) return next();
    res.redirect('/auth/google');
}

module.exports = router;