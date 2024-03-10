const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
    message: {
        type: String,
        required: true
    },
});

const Message = mongoose.model('Message', MessageSchema, 'message');

module.exports = Message;
