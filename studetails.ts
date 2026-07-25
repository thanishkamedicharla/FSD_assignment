class Student {
    name: string;
    age: number;
    rollNumber: number;
    course: string;

    constructor(name: string, age: number, rollNumber: number, course: string) {
        this.name = name;
        this.age = age;
        this.rollNumber = rollNumber;
        this.course = course;
    }

    displayDetails(): void {
        console.log("Student Details:");
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Roll Number: ${this.rollNumber}`);
        console.log(`Course: ${this.course}`);
    }
}

const student1 = new Student("John", 20, 101, "Artificial intelligence");

student1.displayDetails();