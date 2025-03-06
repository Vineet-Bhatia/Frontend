//how to declare and use object type
var student = {
    name: 'Vineet',
    address: "Delhi,India",
    phone: 74045,
    isActive: true
};
console.log(student);
console.log(student.name);
console.log(student.phone);
console.log(typeof student);
var days;
(function (days) {
    days[days["Monday"] = 0] = "Monday";
    days[days["Tuseday"] = 1] = "Tuseday";
    days[days["Wednesday"] = 2] = "Wednesday";
    days[days["Thursday"] = 3] = "Thursday";
    days[days["Friday"] = 4] = "Friday";
    days[days["Saturday"] = 5] = "Saturday";
})(days || (days = {}));
var Months;
(function (Months) {
    Months[Months["Jan"] = 0] = "Jan";
    Months[Months["feb"] = 1] = "feb";
    Months[Months["March"] = 2] = "March";
    Months[Months["April"] = 3] = "April";
    Months[Months["May"] = 4] = "May";
    Months[Months["June"] = 5] = "June";
    Months[Months["july"] = 6] = "july";
    Months[Months["August"] = 7] = "August";
    Months[Months["Sept"] = 8] = "Sept";
    Months[Months["Oct"] = 9] = "Oct";
    Months[Months["Nov"] = 10] = "Nov";
    Months[Months["Dec"] = 11] = "Dec";
})(Months || (Months = {}));
console.log(Months.August);
function myfun(value) {
    switch (value) {
        case Months.Jan:
            console.log("This is first Month of year ");
            break;
        case Months.June:
            console.log("This is second month of year");
            break;
        default:
            console.log("Not valid month");
    }
}
myfun(Months.Dec);
myfun(Months.June);
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["Pending"] = 0] = "Pending";
    OrderStatus[OrderStatus["Delivered"] = 1] = "Delivered";
    OrderStatus[OrderStatus["Dispatch"] = 2] = "Dispatch";
})(OrderStatus || (OrderStatus = {}));
var order;
order = {
    title: 'Samsung',
    price: 3300,
    status: OrderStatus.Dispatch,
    date: new Date(),
};
console.log(order);
console.log(OrderStatus);
var user1 = {
    name: "Vineet",
    email: "abac@gmail.com",
    password: "pass",
    address: "Delhi,India"
};
console.log(user1.name);
console.log(user1.email);
function User(obj) {
    console.log("hi myself ".concat(obj.name, ", from ").concat(obj.address, " and my password is ").concat(obj.password));
}
User(user1);
//Generics
var Box = /** @class */ (function () {
    function Box(content) {
        this.content = content;
    }
    Box.prototype.getContent = function () {
        return this.content;
    };
    return Box;
}());
var stringBox = new Box("Hello");
console.log(stringBox.getContent()); // Output: Hello
var numberBox = new Box(123);
console.log(numberBox.getContent()); // Output: 123
