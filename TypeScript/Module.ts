export function add(a:number,b:number):number{
    return a+b;
}

export function multiply(a:number,b:number):number{
    return a*b;
}

class Employee {
    name: string;
    age: number;
    employeeId: number;

    constructor(name: string, age: number, employeeId: number) {
        this.name = name;
        this.age = age;
        this.employeeId = employeeId;
    }

    getEmployeeDetails(): string {
        return `Employee ${this.name}, Age: ${this.age}, ID: ${this.employeeId}`;
    }

}

let Employee1=new Employee("Vineet",24,101);
console.log(Employee1);




