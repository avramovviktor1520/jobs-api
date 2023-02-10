const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {Schema, model} = require('mongoose');
const User = require('./User');

const EmployeeSchema = new Schema({
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

EmployeeSchema.methods.generateToken = function() {
    const payload = {
        userId: this._id,
        userEmail: this.email
    }
    const token = jwt.sign(payload, process.env['JWT_KEY']);
    return token;
}

EmployeeSchema.pre('save', async function() {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    this.password = await bcrypt.hash(this.password, salt);
});

module.exports = model('Employee', EmployeeSchema);