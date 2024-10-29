// Q1. Initialize variables with all JavaScript primitive types: string, number, boolean, undefined, null and print there output.

// let a = 1
// let b = "1"
// let c = true
// let d = undefined
// let e = null

// console.log(typeof a) 
// console.log(typeof b) 
// console.log(typeof c) 
// console.log(typeof d) 
// console.log(typeof e) 


// let a = 1
// let b = "1"
// let sum = a + b
// console.log(sum);

// Q14. Initialize two variables as string and compares them for equality, without ignoring case.
// Q13. Initialize two variables as string and compares them for equality, ignoring case.




// let a = "Hello"
// let b = "Hello"
// console.log(a === b)


// let c = "Hello"
// let d = "hello"
// console.log(c === d)

// Q1. Write a function named greet that 
// takes a single argument name and prints the message
//  "Hello, [name]!". Call the function with different names.

// function greet(name){
//     return `Hello ${name}`
// }

// console.log(greet("Soyeb"))

// Q3. Write a function maxOfTwo that takes two numbers as input and returns the greater number.


function maxOfTwo(number1, number2){
    if(number1 < number2){
        return number2}
        else{
        return number1
    }
}

console.log(maxOfTwo(5, 10))