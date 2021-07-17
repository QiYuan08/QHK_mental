const mongoose = require('mongoose');

const diary_schema = new mongoose.Schema({

    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    content: {
        type:String,
        required: true
    },
    title: {
        type: String,
        required: true,
        unique:true
    }

})

module.exports = mongoose.model('Diary', diary_schema, 'diary')