// JS  Day-1 interview Prepration

// Q.1 Difference between “ == “ and “ === “ operators.
// Ans :- The "==" operator is used to compare the values of two variables, while the "===" operator is used to compare the values and Data-types of two variables.."==" has Loose equality and "===" Strict Equiality
// E.g := 
// let x = 10;
// let y = "10";

// console.log(x == y);  // Output: true
// console.log(x === y);  // Output: false


// Q.2 What is the spread operator?
// Ans:- the Syntax of spread oprator is (...).  The spread operator (...) is used to spread the elements of the "numbers, string" it introduced in Es6 (Modern EcmaScript) we can also concat 2 array with the help of (...) spread oprator.

// e.g:- 
// let array1 = [1, 2, 3];
// let array2 = [4, 5, 6];

// let concatenatedArray = [...array1, ...array2];
// console.log(concatenatedArray);  // Output: [1, 2, 3, 4, 5, 6]


// Q.3 What are the differences between var, let and const?
// Ans :- 
// Var:
// Function-scoped
// Can be reassigned
// Does not have to be initialized when declared

// let :- 
// Block-scoped
// Can be reassigned, but only within the block in which it is defined
// Does not have to be initialized when declared

// const :- 
// Block-scoped
// Cannot be reassigned
// Must be initialized when declared

// Q.4 What is execution context?
// Ans:- There are two main types of execution context: global and local. The global execution context is created when the JavaScript code is first executed, and it represents the default environment in which the code is run. All variables and functions that are declared outside of any function are part of the global execution context.

// Local execution contexts, on the other hand, are created every time a function is called. These contexts represent the environment within the function and have access to the variables and resources that are defined within that function.

// Q.5 What is meant by first class functions?
// Ans :- First-class functions are functions that can be treated like any other value. This means that they can be assigned to variables, passed as arguments to other functions, and returned as values from other functions.
// E.g:- 
// function sayHello(name) {
//   return `Hello, ${name}!`;
// }
// let greeting = sayHello;  // Assign the "sayHello" function to a variable
// console.log(greeting("John"));  // Output: "Hello, John!"


// Q.6 What are closures? Give an example of closure?
// Ans:- A closure is a function that has access to the variables and resources of its outer (enclosing) function, even after the outer function has finished executing. Closures are created whenever a function is defined inside another function.
// E.g:=
// function outerFunction(x) {
//     return function() {
//       return x;  // "x" is a variable from the outer function
//     }
//   }
  
//   let outerVariable = 10;
//   let innerFunction = outerFunction(outerVariable);  // The inner function is returned and assigned to a variable
//   console.log(innerFunction());  // Output: 10

// Q.7:- Explain call(), apply() and, bind() methods. Give an example of call(), apply(), bind()
// Ans:- call()
// The "call" method calls a function with a specified value for the "this" keyword, 

// Bind()
// The "bind" method creates a new function with a fixed value for the "this" keyword,

// apply()
// "apply" method calls a function with a specified value for the "this" keyword.
  

