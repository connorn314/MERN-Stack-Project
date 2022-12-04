const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const imageSchema = Schema({
    name: {
        type: String,
        required: false
    },
    desc: {
        type: String,
        required: false
    },
    img:
    {
        data: Buffer,
        type: String,
        required: true
    }
});

  
module.exports = mongoose.model('Image', imageSchema);