const Musician = require('../models/musician');
const Artist = require('../models/artist');

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

function addMusician(req, res) {
    Artist.findById(req.params.id, function(err, artist){
        artist.musicians.push(req.body.musicianId);
        artist.save(function(err){
            res.redirect(`/artists/${artist._id}`);
        });
    });
}

module.exports = {
    new: newMusician,
    create,
    addMusician
};