const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const googlerSchema = new Schema({
    name: String,
    email: String,
    googleId: String
});

module.exports = mongoose.model('Googler', googlerSchema);