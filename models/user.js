const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    loginId: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    employeeId: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('User', userSchema);