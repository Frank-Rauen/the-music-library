const Artist = require('../models/artist');

function create(req, res) {
    Artist.findById(req.params.id, function(err, artist){
        artist.albums.push(req.body);
        artist.save(function(err){
            res.redirect(`/artists/${artist._id}`);
        });
    });
}
module.exports = {
    create
}