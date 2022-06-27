const mongoose = require('mongoose')
const customer = require('./customer')

const Transfer = mongoose.Schema({
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer'
    },
    receiverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer'
    },

    senderName: String,
    receiverName: String,
    transferAmount: {
        type: Number,
        default: 0
    },
    transferSuccess: {
        type: Boolean,
        default: false
    },
    dateAndTime: {
        type: String
    }
})

module.exports = mongoose.model('Transfer', Transfer)