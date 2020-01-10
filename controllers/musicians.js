const Musician = require('../models/musician');

function newMusician(req, res) {
    Musician.find({}, function(err, musicians){
        res.render('musicians/new', {
            title: 'Add Musician',
            musicians
        });
    })
}

function create(req, res) {
      var s = req.body.born;
      req.body.born = 
        `${s.substr(5,2)}-${s.substr(8,2)}-${s.substr(0,4)}`;
      Musician.create(req.body, function(err, musician) {
        res.redirect('/musicians/new');
      });
    }

module.exports = {
    new: newMusician,
    create
};