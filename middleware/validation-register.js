const {BadRequestError} = require('../errors/index');
const {passwordStrength} = require('check-password-strength');

module.exports = function(req, res, next) {
    const {email, password, name} = req.body;
    if(!email || !name || !password) throw new BadRequestError('Please provide a valid name, email and password');

    const {contains, length, id} = passwordStrength(password);

    if(contains.length == 4 && length >= 10 && id >= 2) return next();

    throw new BadRequestError('The password you have provided is too weak. A valid password has to be at least 10 characters long and must be made of a number, a symbol and upper/lower case alphabetical characters');
}