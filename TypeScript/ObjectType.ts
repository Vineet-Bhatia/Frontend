//how to declare and use object type
let student:{
    name:string,
    address:string,
    phone:number,
    isActive:boolean
} = {
    name:'Vineet',
    address: "Delhi,India",
    phone:74045,
    isActive:true
};

console.log(student);
console.log(student.name);
console.log(student.phone);
console.log(typeof student);



enum days{
    Monday,
    Tuseday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}

enum Months{
    Jan,
    feb,
    March,
    April,
    May,
    June,
    july,
    August,
    Sept,
    Oct,
    Nov,
    Dec
}


console.log(Months.August);

function myfun(value: Months){
    switch(value){
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

enum OrderStatus{
    Pending,
    Delivered,
    Dispatch,
}

let order:{
    title:string,
    price:number,
    status,
    date: Date
};

order={
    title:'Samsung',
    price:3300,
    status:OrderStatus.Dispatch,
    date:new Date(),
};

console.log(order);

console.log(OrderStatus);



//Interface 

interface User{
    name:String;
    email:string;
    password:string;
}
interface Admin extends User{
    address:string
}

const user1:Admin={
    name:"Vineet",
    email:"abac@gmail.com",
    password:"pass",
    address:"Delhi,India"
};

console.log(user1.name);
console.log(user1.email);

function User(obj :Admin):void{
    console.log(`hi myself ${obj.name}, from ${obj.address} and my password is ${obj.password}`);
}

User(user1);

//Generics
class Box<T> {
    private content: T;
  
    constructor(content: T) {
      this.content = content;
    }
  
    getContent(): T {
      return this.content;
    }
  }
  
  const stringBox = new Box<string>("Hello");
  console.log(stringBox.getContent()); // Output: Hello
  
  const numberBox = new Box<number>(123);
  console.log(numberBox.getContent()); // Output: 123
  

