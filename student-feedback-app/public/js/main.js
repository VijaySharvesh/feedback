document.addEventListener('DOMContentLoaded', () => {
    const feedbackForm = document.getElementById('feedbackForm');
    const feedbackList = document.getElementById('feedbackList');
    const studentForm = document.getElementById('studentForm');
    const studentList = document.getElementById('studentList');

    // Handle feedback submission
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', async (event) => {
            event.preventDefault();
            const formData = new FormData(feedbackForm);
            const feedbackData = Object.fromEntries(formData.entries());

            try {
                const response = await fetch('/api/feedback', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(feedbackData),
                });
                if (response.ok) {
                    const newFeedback = await response.json();
                    displayFeedback(newFeedback);
                    feedbackForm.reset();
                } else {
                    console.error('Error submitting feedback');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        });
    }

    // Function to display feedback
    function displayFeedback(feedback) {
        const feedbackItem = document.createElement('li');
        feedbackItem.textContent = `${feedback.studentName}: ${feedback.comment}`;
        feedbackList.appendChild(feedbackItem);
    }

    // Handle student submission
    if (studentForm) {
        studentForm.addEventListener('submit', async (event) => {
            event.preventDefault();
            const formData = new FormData(studentForm);
            const studentData = Object.fromEntries(formData.entries());

            try {
                const response = await fetch('/api/students', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(studentData),
                });
                if (response.ok) {
                    const newStudent = await response.json();
                    displayStudent(newStudent);
                    studentForm.reset();
                } else {
                    console.error('Error adding student');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        });
    }

    // Function to display student
    function displayStudent(student) {
        const studentItem = document.createElement('li');
        studentItem.textContent = `${student.name} (${student.id})`;
        studentList.appendChild(studentItem);
    }
});