const Artist = require('../models/artist')

module.exports = {
    new: newArtist,
    create,
    index,
    show
}

function newArtist(req, res) {
    res.render('artists/new', {title: 'Add Artist'});
}

function create(req, res) {
    const artist = new Artist(req.body);
    artist.save(function(err){
        if (err) return res.render('artists/new');
        console.log(artist);
        res.redirect('artists');
    });
    if (req.body.yearFounded) req.body.yearFounded = req.body.yearFounded.split(',');
	// remove empty properties
	for (let key in req.body) {
 	  if (req.body[key] === '') delete req.body[key];
	}
}

function index(req, res) {
    Artist.find({}, function(err, artists){
        res.render('artists/index', {title: 'All Artists', artists});
    });
}

function show(req, res) {
    Artist.findById(req.params.id, function(err, artist) {
      res.render('artists/show', { title: 'Artist Detail', artist });
    });
  }