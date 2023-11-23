const express = require('express');
const router = express.Router();
const formController = require('../controllers/formController');

router.get('/getForm', formController.getForm);

router.post('/save', formController.saveForm);

router.post('/submit', formController.submitForm);

router.post('/start', formController.startForm);

module.exports = router;
