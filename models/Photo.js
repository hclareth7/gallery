const  mongoose = require('mongoose');

const PhotoSchema = mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    url:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: false
    },
    date:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Photos', PhotoSchema);


