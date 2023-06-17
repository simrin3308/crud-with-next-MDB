const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    note: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    },
})

mongoose.models = {}
module.exports = mongoose.model('Notes', noteSchema)