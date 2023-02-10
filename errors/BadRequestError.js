const {StatusCodes} = require('http-status-codes');
const Error = require('./ErrorClass');

class BadRequestError extends Error {
    constructor(message) {
        super(message);
        this.statusCode = StatusCodes.BAD_REQUEST;
    }
}

module.exports = BadRequestError;