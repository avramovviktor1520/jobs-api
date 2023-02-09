const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
    res.send('Trying to login');

});

router.post('/register', (req, res) => {
    res.send('Trying to register');

});

module.exports = router;