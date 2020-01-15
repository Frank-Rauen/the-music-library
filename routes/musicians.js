const express = require('express');
const router = express.Router();

const musiciansCtlr = require('../controllers/musicians');

router.get('/musicians/new', musiciansCtlr.new);
router.post('/musicians', isLoggedIn, musiciansCtlr.create);
router.post('/artists/:id/musicians', isLoggedIn, musiciansCtlr.addMusician);

function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()) return next();
    res.redirect('/auth/google');
}


module.exports = router;