const {StatusCodes} = require('http-status-codes');

module.exports = function(err, req, res, next) {
    res.status(StatusCodes.BAD_REQUEST).json({msg: "Bad Request"});
}