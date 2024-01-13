"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    constructor(name) {
        this.name = name;
        this.studentID = this.generateStudentID();
        this.enrolledCourses = [];
        this.balance = 0;
    }
    generateStudentID() {
        const uniqueID = Math.floor(10000 + Math.random() * 90000).toString();
        return uniqueID;
    }
    enroll(course) {
        this.enrolledCourses.push(course);
        console.log(`Enrolled in course: ${course}`);
    }
    viewBalance() {
        console.log(`Balance: $${this.balance}`);
    }
    payTuition(amount) {
        this.balance -= amount;
        console.log(`Paid tuition: $${amount}`);
    }
    showStatus() {
        console.log(`Name: ${this.name}`);
        console.log(`Student ID: ${this.studentID}`);
        console.log(`Enrolled Courses: ${this.enrolledCourses.join(', ')}`);
        console.log(`Balance: $${this.balance}`);
    }
}
// Usage example
const student1 = new Student('John Doe');
student1.enroll('Math');
student1.enroll('English');
student1.viewBalance();
student1.payTuition(1000);
student1.viewBalance();
student1.showStatus();
