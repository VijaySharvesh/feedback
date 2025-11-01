class Student {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }

    static validate(student) {
        if (!student.name || !student.age || !student.email) {
            throw new Error("All fields are required.");
        }
        if (typeof student.age !== 'number' || student.age <= 0) {
            throw new Error("Age must be a positive number.");
        }
        if (!/\S+@\S+\.\S+/.test(student.email)) {
            throw new Error("Email is not valid.");
        }
    }
}

module.exports = Student;