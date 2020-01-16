const Artist = require('../models/artist');
const Musician = require('../models/musician');

module.exports = {
    new: newArtist,
    create,
    index,
    show,
    delArtist
}

function newArtist(req, res) {
    res.render('artists/new', {title: 'Add Artist'});
    user:req.user

}

function create(req, res) {
    const artist = new Artist(req.body);
    artist.save(function(err){
        if (err) return res.redirect('artists/new');
        console.log(artist);
        res.redirect(`/artists/${artist._id}`);
    });
    if (req.body.yearFounded) req.body.yearFounded = req.body.yearFounded.split(',');
	for (let key in req.body) {
     if (req.body[key] === '') delete req.body[key];
     user:req.user;
	}
}

function index(req, res) {
    Artist.find({}, function(err, artists){
        res.render('artists/index', {title: 'All Artists', artists});
        user:req.user;

    });
}

function show(req, res) {
    Artist.findById(req.params.id)
    .populate('musicians').exec(function(err, artist) {
      Musician.find(
       {_id: {$nin: artist.musicians}},
       function(err, musicians) {
         console.log(musicians);
         res.render('artists/show', {
           title: 'Artist Detail', artist, musicians
         });
       }
     );
    });
  }

  function delArtist(req, res){
    Artist.findByIdAndDelete(req.params.id,(err,artist) =>{
      if (err) return res.status(500).send(err);
      res.redirect('/artists')
    });
      
  }