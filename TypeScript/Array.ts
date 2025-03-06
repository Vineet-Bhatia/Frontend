//Array
// syntax let arrayName: type[] ;

//example
let numbers: number[]=[12,45,65,67,21];

console.log(numbers);
//Access the elements in the array
console.log(numbers[2]);
console.log(numbers[4]);

//Change the element of the array
numbers[2]=50;

console.log(numbers);


//making array with another type

let arr: string[];
arr=["Vin","yash","Surbhi"];
console.log("this is string type of array "+arr);

//check the length of array
console.log(numbers.length);

//it remove compiler error if you open js code wile runing the ts
export{};

//Applying loop over the array
for(let i=0;i<numbers.length;i++){
    console.log(numbers[i]);
}

//Add the new element in the array using push method
numbers.push(4);

console.log(numbers);


//joining the array with help of array method
console.log(arr.join("-----"));

//using for Each metod
//contexual typing
numbers.forEach((value) =>{
    console.log(value);
});


//You can also use union two make a array with multiple types
let mixed: (string | number)[];
mixed=["one","two","three",1,3,5];

console.log(mixed);



