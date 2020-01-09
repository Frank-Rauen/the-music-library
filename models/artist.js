const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const artistSchema = new Schema({
        name: String,
        genre: String,
        yearFounded: Number,
        // musicians: [musicianSchema]
});