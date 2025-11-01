class Feedback {
    constructor(studentId, feedbackText, rating) {
        this.studentId = studentId;
        this.feedbackText = feedbackText;
        this.rating = rating;
        this.createdAt = new Date();
    }

    static validate(feedback) {
        if (!feedback.studentId || !feedback.feedbackText || feedback.rating < 1 || feedback.rating > 5) {
            throw new Error('Invalid feedback data');
        }
    }
}

module.exports = Feedback;