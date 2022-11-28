const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const likeSchema = Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },

  binding: {
    type: Schema.Types.ObjectId,
    ref: 'Binding'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Like', gameSchema);
