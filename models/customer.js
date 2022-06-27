const mongoose = require('mongoose')

const Customer = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true, 
        unique: true
    },
    curBalance: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Customer', Customer)