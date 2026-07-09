const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    imageURL: { type: String, required: true },
    title: { type: String, required: true },
    author: { type: String, required: true },
    year: { type: Number, required: true },
    genre: { type: String, required: true },
    rating: { type: String, required: true },
    userId: { type: String, required: true },
})

module.exports = mongoose.model('Book', bookSchema);