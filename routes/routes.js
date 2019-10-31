const express = require('express');
const router = express.Router();

const helloWorldController = require('../controllers/helloWorldController');
const watsonVisualRecognitionController = require('../controllers/watsonVisualRecognitionController');

router.get('/helloworld', helloWorldController.helloWorld);

router.post('/classify/image', watsonVisualRecognitionController.classifyImage);

module.exports = router;