class Employee {
    public name: string;          
    private salary: number;      
    protected department: string; 

    constructor(name: string, salary: number, department: string) {
        this.name = name;
        this.salary = salary;
        this.department = department;
    }

    public displayDetails(): void {
        console.log(`Name: ${this.name}`);
        console.log(`Salary: ${this.salary}`);
        console.log(`Department: ${this.department}`);
    }

    public getSalary(): number {
        return this.salary;
    }
}


class Manager extends Employee {
    showDepartment(): void {
        console.log(`Manager Department: ${this.department}`);
    }
}

const emp = new Employee("John", 50000, "IT");

console.log(`Employee Name: ${emp.name}`);

emp.displayDetails();

const manager = new Manager("Alice", 80000, "HR");

manager.showDepartment();