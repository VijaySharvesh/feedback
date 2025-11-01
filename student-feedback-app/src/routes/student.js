const express = require('express');
const StudentController = require('../controllers/studentController');

const router = express.Router();
const studentController = new StudentController();

// Route to add a new student
router.post('/students', (req, res) => {
    studentController.addStudent(req, res);
});

// Route to get all students
router.get('/students', (req, res) => {
    studentController.getStudents(req, res);
});

// Route to get a specific student by ID
router.get('/students/:id', (req, res) => {
    studentController.getStudentById(req, res);
});

// Route to update a student by ID
router.put('/students/:id', (req, res) => {
    studentController.updateStudent(req, res);
});

// Route to delete a student by ID
router.delete('/students/:id', (req, res) => {
    studentController.deleteStudent(req, res);
});

module.exports = router;