// Q1: Define variables of different types and print their values
let userName: string = "Vineet";
let password: string = "Vineet2000";
let age: number = 24;
let isActive: boolean = true; // Explicitly declaring type as boolean

isActive = false; // ✅ Now works
isActive = true;  // ✅ No error
//checking the type
console.log(typeof userName); // Output: string
console.log(typeof password); // Output: string
console.log(typeof age);   // Output: number

//printing
 console.log(userName);
 console.log(age);

// Q2: Function to return formatted user info
// Q2: Function to return formatted user info
function getUserInfo(age: number, isActive: boolean): string {
    return `User is ${age} years old and is ${isActive ? "active" : "inactive"}.`;
}

let userEmail: string = 'abc@gmail.com';


let userDetailDescription = `User is a programmer. Email ID is ${userEmail}, and User name is ${userName}.`;

console.log(userEmail);
console.log(userDetailDescription);

//calling the function
console.log(getUserInfo(age,isActive));



