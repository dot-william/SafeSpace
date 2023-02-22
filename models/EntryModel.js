// import module `mongoose`
var mongoose = require('mongoose');

// defines the schema for collection `users`
var EntrySchema = new mongoose.Schema({
    entryTitle: {
        type: String,
        required: true
    },
    entryBody: {
        type: String,
        required: true
    },
    significance: {
        type: String,
        required: true
    },
    entryDate: {
        type: Date,
        required: true
    },
    timePosted: {
        type: Number,
        required: true
    },
    authorUserName: {
        type: String,
        required: true
    },
    privacy: {
        type: String,
        required: true
    },
    entryImage: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'uploads'
    }
});

module.exports = mongoose.model('Entry', EntrySchema);
