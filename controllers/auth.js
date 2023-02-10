// const Employee = require('../models/Users/Employee');
const Employee = require('../models/Users/Employee');
const {BadRequestError} = require('../errors');
const passwordStrength = require('check-password-strength');
const {StatusCodes} = require('http-status-codes');



const register = async (req, res) => {
    const {email, name, password} = req.body;
    const user = await Employee.create({
        email,
        name,
        password
    });

    res.status(StatusCodes.OK).json({
        statusCode: StatusCodes.OK,
        success: true,
        message: "User created successfully. Please check your email in order to activate your account. In case there is a problem with the activation, please contact us at helpdesk@jobify.com in order to resolve the issue ASAP.",
        token: user.generateToken()
    });

}


const login = async (req, res) => {

}

module.exports = {
    register,
    login
}