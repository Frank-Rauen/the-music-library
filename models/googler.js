const mongoose = require('mongoose');

const googlerSchema = new mongoose.Schema({
    name: String,
    email: String,
    googleId: String
});

module.exports = mongoose.model('Googler', googlerSchema);