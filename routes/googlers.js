const router = require('express').Router();
const googlersCtrl = require('../controllers/googlers');
const passport = require('passport');


router.get('/artists', isLoggedIn, googlersCtrl.index);

router.get('/auth/google', passport.authenticate(
    'google', 
    {scope: ['profile', 'email']}
    ));
  
  router.get('/oauth2callback', passport.authenticate(
    'google',
    {
      successRedirect: '/artists',
      failureRedirect: '/'
    }
    ));
  
  router.get('/logout', function(req, res){
    req.logOut();
    res.redirect('/');
  });

function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()) return next();
    res.redirect('/auth/google');
}

module.exports = router;