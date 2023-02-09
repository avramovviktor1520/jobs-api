const mongoose = require('mongoose');
const User = require('./User');

const Employee = new mongoose.Schema({
    ...User,
    files: {
        type:[Schema.Types.ObjectId],
        default: [] 
    },
    emails: {
        type:[Schema.Types.ObjectId],
        default: [] 
    }
});