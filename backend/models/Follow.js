const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const followSchema = Schema({
    userFollowed: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    userFollowing: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }}, {
    timestamps: true
})

module.exports = mongoose.model('Follow', followSchema);