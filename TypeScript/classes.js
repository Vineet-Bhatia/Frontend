var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee(name, age, employeeId, Salary) {
        this.name = name;
        this.age = age;
        this.employeeId = employeeId;
        this.Salary = Salary;
    }
    Employee.prototype.getEmployeeDetails = function () {
        return "Employee ".concat(this.name, ", Age: ").concat(this.age, ", ID: ").concat(this.employeeId);
    };
    return Employee;
}());
var employee = new Employee("John Doe", 30, 101, 50000);
console.log(employee.getEmployeeDetails());
//Read Only
var Car = /** @class */ (function () {
    function Car(model) {
        this.model = model;
    }
    return Car;
}());
var car = new Car('Toyota');
//car.model = 'Honda';  Error: Cannot assign to 'model' because it is a read-only property.
//getter and setter
var Person1 = /** @class */ (function () {
    function Person1(age) {
        this._age = age;
    }
    Object.defineProperty(Person1.prototype, "age", {
        // Getter
        get: function () {
            return this._age;
        },
        // Setter
        set: function (value) {
            if (value <= 0 || value >= 200) {
                throw new Error('The age is invalid');
            }
            this._age = value;
        },
        enumerable: false,
        configurable: true
    });
    return Person1;
}());
var person = new Person1(22);
console.log(person.age); // Getter is called, Output: 22
person.age = 25; // Setter is called
console.log(person.age); // Output: 25
//person.age = -5;         // Setter is called, throws error: The age is invalid
//Inheritance
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.move = function (distance) {
        if (distance === void 0) { distance = 0; }
        console.log("Animal moved ".concat(distance, " meters."));
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.bark = function () {
        console.log('Woof! Woof!');
    };
    return Dog;
}(Animal));
var dog = new Dog();
dog.bark(); // Output: Woof! Woof!
dog.move(10); // Output: Animal moved 10 meters.
//Super keyword:In a derived class, calling super() within the constructor invokes the parent class's constructor. 
// This is mandatory before accessing this in the derived class's constructor.
var Animals = /** @class */ (function () {
    function Animals() {
    }
    Animals.prototype.move = function () {
        console.log("Animal is moving");
    };
    return Animals;
}());
var Dogs = /** @class */ (function (_super) {
    __extends(Dogs, _super);
    function Dogs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dogs.prototype.move = function () {
        _super.prototype.move.call(this); // Calls the move method of Animal
        console.log("Dog is running");
    };
    return Dogs;
}(Animal));
var dogs = new Dogs();
dogs.move(); // Output: // Animal is moving // Dog is running
//Static Keyword:The static keyword defines class-level properties and methods that belong to the class 
// itself rather than to instances of the class. 
// These members can be accessed without creating an instance of the class
var MathUtil = /** @class */ (function () {
    function MathUtil() {
    }
    MathUtil.calculateCircumference = function (radius) {
        return 2 * MathUtil.PI * radius;
    };
    MathUtil.PI = 3.14159;
    return MathUtil;
}());
console.log(MathUtil.PI); // Output: 3.14159
console.log(MathUtil.calculateCircumference(10)); // Output: 62.8318
//Abstract classes
var Department = /** @class */ (function () {
    function Department(name) {
        this.name = name;
    }
    return Department;
}());
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment() {
        return _super.call(this, 'Accounting') || this;
    }
    AccountingDepartment.prototype.describe = function () {
        console.log('Accounting Department');
    };
    return AccountingDepartment;
}(Department));
var dept = new AccountingDepartment();
dept.describe(); // Output: Accounting Department
