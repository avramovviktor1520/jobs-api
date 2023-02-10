const {StatusCodes} = require('http-status-codes');

module.exports = function(err, req, res, next) {
    console.log(err);
    res.status(StatusCodes.BAD_REQUEST).json({
        statusCode: err.statusCode,
        success:false,
        message: err.message
    });
}