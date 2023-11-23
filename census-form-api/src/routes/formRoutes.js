const express = require('express');
const router = express.Router();
const formController = require('../controllers/formController');

router.get('/getForm', formController.getForm);

router.post('/save', formController.saveForm);

router.post('/submit', formController.submitForm);

module.exports = router;
