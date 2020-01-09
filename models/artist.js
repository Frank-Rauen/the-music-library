const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const albumSchema = new Schema({
    name: String,
    genre: String,
    releaseYear: Number,

},{
    timestamps: true,
})

const artistSchema = new Schema({
        name: {type: String, required: true},
        genre: {type: String, required: true},
        yearFounded: {type: Number, default: 1900},
        albums: [albumSchema],
        // musicians: [{type: Schema.Types.ObjectId, ref:'Musician'}]
},{
    timestamps: true,
});



module.exports = mongoose.model('Artist', artistSchema);