const express = require('express');
const router = express.Router();

const passwordChecker = require('../middleware/validation-register');
const {register} = require('../controllers/auth');

router.post('/login', (req, res) => {
    res.send('Trying to login');

});

router.post('/register', passwordChecker, register);

module.exports = router;