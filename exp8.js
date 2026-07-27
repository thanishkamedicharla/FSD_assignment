
class Student {
    static collegeName = "ABC Engineering college";
    static totalStudents = 0;
    rollno;
    studentName;
    constructor(name, rollNo) {
        this.studentName = name;
        this.rollno = rollNo;
        Student.totalStudents++;
    }
    static getCollegeInfo() {
        console.log(`College ${Student.collegeName}`);
    }
    displayStudent() {
        console.log(`Name: ${this.studentName}`);
        console.log(`Roll.No: ${this.rollno}`);
    }
}
Student.getCollegeInfo();
const s1 = new Student("Rahul", "24a5b0");
const s2 = new Student("Reshma", "24a5b2");
const s3 = new Student("Siri", "24a5b3");
s1.displayStudent();
s2.displayStudent();
s3.displayStudent();
console.log(`Total Students: ${Student.totalStudents}`);
