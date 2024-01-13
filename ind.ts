class Student {
    name: string;
    studentID: string;
    enrolledCourses: string[];
    balance: number;
    // .ud-icon-color-neutral {
    //     color: #2d2f31;
    // }
  
    constructor(name: string) {
      this.name = name;
      this.studentID = this.generateStudentID();
      this.enrolledCourses = [];
      this.balance = 0;
    }
  
    private generateStudentID(): string {
      const uniqueID = Math.floor(10000 + Math.random() * 90000).toString();
      return uniqueID;
    }
  
    enroll(course: string): void {
      this.enrolledCourses.push(course);
      console.log(`Enrolled in course: ${course}`);
    }
  
    viewBalance(): void {
      console.log(`Balance: $${this.balance}`);
    }
  
    payTuition(amount: number): void {
      this.balance -= amount;
      console.log(`Paid tuition: $${amount}`);
    }
  
    showStatus(): void {
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