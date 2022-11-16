const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bindingSchema = Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
        
    game: {
        type: Schema.Types.ObjectId,
        ref: 'Game'
    },
    controller: {
        type: String,
        enum: {
            values: ["pc", "xbox-one", "game-cube"],
            message: 'This controller is not supported by key-wi'
        }
    },
    keyBinds: {
        type: Map,
        of: String // may just want to do Object (mixed schema type, not as specific)
    }
    }, {
    timestamps: true
});

module.exports = mongoose.model('Binding', bindingSchema);