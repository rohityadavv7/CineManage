const mongoose = require('mongoose')

const  moviesSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    imageUrl:{
        type: String,
        required: true
    },
    genre:{
        type: String,
        required: true
    },
    releaseYear:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Movies', moviesSchema)