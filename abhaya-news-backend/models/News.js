const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    category: {
        type: String,
        default: 'general'
    },
    imageUrl: {
        type: String
    },
    isBreaking: {
        type: Boolean,
        default: false
    },
    breakingUrl: {
        type: String,
        default: ''
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});



module.exports = mongoose.model('News', newsSchema);
