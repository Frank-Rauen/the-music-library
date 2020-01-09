const Artist = require('../models/artist')

module.exports = {
    new: newArtist,
    create,
    index
}

function newArtist(req, res) {
    res.render('artists/new');
}

function create(req, res) {
    const artist = new Artist(req.body);
    artist.save(function(err){
        if (err) return res.render('artists/new');
        console.log(artist);
        res.redirect('artists/new');
    });
}

function index(req, res) {
    Artist.find({}, function(err, artists){
        res.render('artists/index', {title: 'All Artists', artists});
    });
}