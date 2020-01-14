const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/', function(req, res, next) {
    res.redirect('/artists');
  });

router.get('/', function(req, res) {
  res.render('index', {
    user: req.user
  });
});

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

module.exports = router;
