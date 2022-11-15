const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bindingSchema = Schema({
    user: Schema.Types.ObjectId,
    game: Schema.Types.ObjectId,
    controller: {
        type: String,
        required: true
    },
    keyBinds: {
        
    }
    }, {
    timestamps: true
});

module.exports = mongoose.model('Binding', bindingSchema);