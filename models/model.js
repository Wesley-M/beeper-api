const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String,
        unique: true
    },
    content: {
        required: true,
        type: String,
        unique: true
    }
}, {
    timestamps: true
});

const songModel = mongoose.model('Song', songSchema);

exports.SongModel = songModel;
