const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/login', authController.login);
//router.get('/test', authController.login);

module.exports = router;

