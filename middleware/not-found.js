const {StatusCodes} = require('http-status-codes');

module.exports = function(req, res) {
    res.status(StatusCodes.NOT_FOUND).send('<h1>Route not found</h1>');
}