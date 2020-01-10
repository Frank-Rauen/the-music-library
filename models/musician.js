const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const musicianSchema = new Schema({
    name: {type: String, required: true, unique: true},
    born: Date,
    instrument: String,
});

module.exports = mongoose.model ('Musician', musicianSchema);

