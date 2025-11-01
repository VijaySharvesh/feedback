class FeedbackController {
    constructor() {
        this.feedbacks = [];
    }

    submitFeedback(req, res) {
        const { studentId, feedbackText } = req.body;
        const feedback = { studentId, feedbackText, date: new Date() };
        this.feedbacks.push(feedback);
        res.status(201).json({ message: 'Feedback submitted successfully', feedback });
    }

    getFeedback(req, res) {
        res.status(200).json(this.feedbacks);
    }
}

module.exports = FeedbackController;