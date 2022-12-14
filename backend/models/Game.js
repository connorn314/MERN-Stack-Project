const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameSchema = Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    compatibility: {
        type: String,
        required: true
    },
    developer: {
        type: String,
        required: true
    },
    validMovements: {
        type: [String],
        required: true
    }}, {
    timestamps: true
});

module.exports = mongoose.model('Game', gameSchema);
