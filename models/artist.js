const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const artistSchema = new Schema({
        name: String,
        genre: String,
        yearFounded: {type: Number, default: 1900},
        // musicians: [musicianSchema]
});

module.exports = mongoose.model('Artist', artistSchema);