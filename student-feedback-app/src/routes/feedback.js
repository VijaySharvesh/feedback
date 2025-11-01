const express = require('express');
const FeedbackController = require('../controllers/feedbackController');

const router = express.Router();
const feedbackController = new FeedbackController();

router.post('/submit', feedbackController.submitFeedback.bind(feedbackController));
router.get('/all', feedbackController.getAllFeedback.bind(feedbackController));

module.exports = router;