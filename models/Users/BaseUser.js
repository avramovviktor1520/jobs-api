const {Schema} = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const baseDefinition = {
    name: {
        type: String,
        required: [true, 'Please provide a name'],
        minlength:5,
        maxlength:30
    },
    email: {
        type: String,
        required: [true, 'Please provide a name'],
        match:[
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 
            'Please provide a valid email'
        ],
        unique:true
    },
    password: {
        type: String,
        required: [true, 'Please provide a password'],
        minlength:6,
    },

    status: {
        type: String,
        enum: ["Pending", "Active"],
        default: "Pending"
    }
}

class User extends Schema {
    constructor(definition = {}) {
        const extendedDefinition = {
            ...definition,
            ...baseDefinition
        }
        super(extendedDefinition);

        this.pre('save', this.hashPassword);
        this.methods.generateToken = this.generateToken;
    }
    
    generateToken() {
        const payload = {
            userId: this._id,
            userEmail: this.email
        }
        const token = jwt.sign(payload, process.env['JWT_KEY']);
        return token;
    }

    async hashPassword() {
        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);
        this.password = await bcrypt.hash(this.password, salt);
    }
}

module.exports = User;