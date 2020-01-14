const router = require('express').Router();
const googlersCtrl = require('../controllers/googlers');


router.get('/artists', isLoggedIn, googlersCtrl.index);

function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()) return next();
    res.redirect('/auth/google');
}

module.exports = router;