const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const artistSchema = new Schema({
        name: {type: String, required: true},
        genre: {type: String, required: true},
        yearFounded: {type: Number, default: 1900},
        // musicians: [musicianSchema]
},{
    timestamps: true,
});

module.exports = mongoose.model('Artist', artistSchema);