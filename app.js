//Global NPM modules
require('express-async-errors');

//NPM modules
const express = require('express');
const dotenv = require('dotenv');

//Local modules
const connectToDB = require('./database/connect');

//APP initialization
dotenv.config({path:'.env'});

const app = express();

(() => {
    const PORT = process.env['PORT'];
});