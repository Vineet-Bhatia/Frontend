// Q1: Define variables of different types and print their values
var userName = "Vineet";
var password = "Vineet2000";
var age = 24;
var isActive = true; // Explicitly declaring type as boolean
isActive = false; // ✅ Now works
isActive = true; // ✅ No error
//checking the type
console.log(typeof userName); // Output: string
console.log(typeof password); // Output: string
console.log(typeof age); // Output: number
//printing
console.log(userName);
console.log(age);
// Q2: Function to return formatted user info
// Q2: Function to return formatted user info
function getUserInfo(age, isActive) {
    return "User is ".concat(age, " years old and is ").concat(isActive ? "active" : "inactive", ".");
}
var userEmail = 'abc@gmail.com';
var userDetailDescription = "User is a programmer. Email ID is ".concat(userEmail, ", and User name is ").concat(userName, ".");
console.log(userEmail);
console.log(userDetailDescription);
//calling the function
console.log(getUserInfo(age, isActive));
