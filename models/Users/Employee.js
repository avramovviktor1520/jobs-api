const {model} = require('mongoose');
const User = require('./BaseUser');

const employeeDefinition = {
    files: {
        type:[User.Types.ObjectId],
        default: [] 
    },
    emails: {
        type:[User.Types.ObjectId],
        default: [] 
    }
}

class Employee extends User {
    constructor() {
        super(employeeDefinition);
    }
}

module.exports = model('Employee', (new Employee()));