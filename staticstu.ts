class Student {
    name: string;
    rollNumber: number;

    static collegeName: string = "Shri Vishnu Engineering College for Women";

    constructor(name: string, rollNumber: number) {
        this.name = name;
        this.rollNumber = rollNumber;
    }

    displayDetails(): void {
        console.log(`Name: ${this.name}`);
        console.log(`Roll Number: ${this.rollNumber}`);
        console.log(`College: ${Student.collegeName}`);
    }

    static displayCollegeName(): void {
        console.log(`College Name: ${Student.collegeName}`);
    }
}

const student1 = new Student("Siri", 101);
const student2 = new Student("Sarah", 102);

student1.displayDetails();
console.log("----------------");
student2.displayDetails();

Student.displayCollegeName();