const Googler = require('../models/googler');

module.exports = {
    index
};

function index(req, res) {
    Googler.find({}, function(err, googlers) {
      res.render('index', { 
        googlers,
      user:req.user
     });
    });
  }