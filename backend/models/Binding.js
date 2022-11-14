const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bindingSchema = Schema({
    user: mongoose.isObjectIdOrHexString,
    game: mongoose.isObjectIdOrHexString,
    controls: {
        
    }
    }, {
    timestamps: true
});

module.exports = mongoose.model('Binding', bindingSchema);