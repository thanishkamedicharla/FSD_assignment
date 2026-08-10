class Student {
    readonly studentId: number;
    name: string;
    age: number;
    course: string;

    constructor(studentId: number, name: string, age: number, course: string) {
        this.studentId = studentId;
        this.name = name;
        this.age = age;
        this.course = course;
    }

    displayDetails(): void {
        console.log("Student Details:");
        console.log(`Student ID: ${this.studentId}`);
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Course: ${this.course}`);
    }
}

const student1 = new Student(101, "John", 20, "Computer Science");

student1.displayDetails();
