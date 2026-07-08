const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    imageURL: { type: String, required: true },
    userId: { type: String, required: true },
    rating: { type: String, required: true },
})

module.exports = mongoose.model('Book', bookSchema);