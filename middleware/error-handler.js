const {StatusCodes} = require('http-status-codes');

module.exports = function(err, req, res, next) {
    res.status(StatusCodes.BAD_REQUEST).json({
        statusCode: err.statusCode,
        success:false,
        message: err.message
    });
}