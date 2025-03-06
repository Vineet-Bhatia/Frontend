interface Person {
    name: string;
    age: number;
}

class Employee implements Person {
    public name: string;
    public age: number;
    public employeeId: number;
    private Salary; //Salary cannot be accessed outside the class as it is private

    constructor(name: string, age: number, employeeId: number, Salary: number) {
        this.name = name;
        this.age = age;
        this.employeeId = employeeId;
        this.Salary = Salary;
    }

    getEmployeeDetails(): string {
        return `Employee ${this.name}, Age: ${this.age}, ID: ${this.employeeId}`;
    }
}

let employee = new Employee("John Doe", 30, 101, 50000);
console.log(employee.getEmployeeDetails());



//Read Only
class Car {
    readonly model: string;

    constructor(model: string) {
        this.model = model;
    }
}

const car = new Car('Toyota');
//car.model = 'Honda';  Error: Cannot assign to 'model' because it is a read-only property.



//getter and setter
class Person1 {
    private _age: number;

    constructor(age: number) {
        this._age = age;
    }

    // Getter
    get age(): number {
        return this._age;
    }

    // Setter
    set age(value: number) {
        if (value <= 0 || value >= 200) {
            throw new Error('The age is invalid');
        }
        this._age = value;
    }
}

let person = new Person1(22);
console.log(person.age); // Getter is called, Output: 22
person.age = 25;         // Setter is called
console.log(person.age); // Output: 25
//person.age = -5;         // Setter is called, throws error: The age is invalid


//Inheritance
class Animal { //Parent class
    move(distance: number = 0) {
        console.log(`Animal moved ${distance} meters.`);
    }
}

class Dog extends Animal { //child inheritance
    bark() {
        console.log('Woof! Woof!');
    }
}

const dog = new Dog();
dog.bark(); // Output: Woof! Woof!
dog.move(10); // Output: Animal moved 10 meters.


//Super keyword:In a derived class, calling super() within the constructor invokes the parent class's constructor. 
// This is mandatory before accessing this in the derived class's constructor.
class Animals {
    move() {
      console.log("Animal is moving");
    }
  }
  
  class Dogs extends Animal {
    move() {
      super.move(); // Calls the move method of Animal
      console.log("Dog is running");
    }
  }
  
  const dogs = new Dogs();
  dogs.move();  // Output: // Animal is moving // Dog is running

  

  //Static Keyword:The static keyword defines class-level properties and methods that belong to the class 
  // itself rather than to instances of the class. 
  // These members can be accessed without creating an instance of the class

  class MathUtil {
    static PI: number = 3.14159;
  
    static calculateCircumference(radius: number): number {
      return 2 * MathUtil.PI * radius;
    }
  }
  
  console.log(MathUtil.PI); // Output: 3.14159
  console.log(MathUtil.calculateCircumference(10)); // Output: 62.8318

  
//Abstract classes
abstract class Department {
    constructor(public name: string) {}
  
    abstract describe(): void; // Must be implemented in derived classes
  }
  
  class AccountingDepartment extends Department {
    constructor() {
      super('Accounting');
    }
  
    describe() {
      console.log('Accounting Department');
    }
  }
  
  const dept = new AccountingDepartment();
  dept.describe(); // Output: Accounting Department
  



  
