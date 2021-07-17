const mongoose = require('mongoose');

const user_schema = new mongoose.Schema({

    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    // create an array of diary for every diary the user created
    diary: [{
        title: {type: String, required: true},
        content: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Diary',
            required: true
        }

    }]

})