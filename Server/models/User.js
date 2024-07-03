const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    moviesWatching:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Movies',
        default:[]
    }],
    moviesWatched:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Movies',
        default:[]
    }]
},{timestamps: true})

module.exports = mongoose.model('User', userSchema);