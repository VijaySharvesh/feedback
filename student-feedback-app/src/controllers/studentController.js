class StudentController {
    constructor() {
        this.students = [];
    }

    addStudent(student) {
        this.students.push(student);
        return student;
    }

    getStudents() {
        return this.students;
    }

    getStudentById(id) {
        return this.students.find(student => student.id === id);
    }
}

module.exports = StudentController;