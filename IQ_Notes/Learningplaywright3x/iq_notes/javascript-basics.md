# JavaScript Basics

## Introduction
JavaScript is a versatile programming language primarily used for web development. It allows developers to create dynamic and interactive web applications. This document covers fundamental concepts of JavaScript, including variables, data types, console logging, and basic syntax.

## Variables
In JavaScript, variables are used to store data values. You can declare a variable using `let`, `const`, or `var`. 

- **let**: Used to declare variables that can be reassigned.
- **const**: Used to declare variables that cannot be reassigned.
- **var**: An older way to declare variables, function-scoped or globally scoped.

### Example:
```javascript
let age = 25; // A variable that can be changed
const name = "John"; // A constant variable
```

## Data Types
JavaScript has several data types, including:

- **String**: Represents text. Example: `"Hello, World!"`
- **Number**: Represents numeric values. Example: `25`
- **Boolean**: Represents true or false values. Example: `true`
- **Object**: A collection of key-value pairs. Example: `{ name: "John", age: 25 }`
- **Array**: A list of values. Example: `[1, 2, 3, 4]`
- **Undefined**: A variable that has been declared but not assigned a value.

## Console Logging
The `console.log()` function is used to print messages to the console, which is helpful for debugging and tracking the flow of your code.

### Example:
```javascript
console.log("Hello The Testing Academy!"); // Logs a greeting message
console.log("My age is: ", age); // Logs the age variable
```

## Basic Syntax
JavaScript syntax is the set of rules that define a correctly structured JavaScript program. Here are some key points:

- Statements end with a semicolon (`;`).
- Code blocks are defined using curly braces `{}`.
- Comments can be added using `//` for single-line comments or `/* */` for multi-line comments.

### Example:
```javascript
// This is a single-line comment
/*
This is a multi-line comment
*/
if (age >= 18) {
    console.log("You are an adult.");
}
```

## Conclusion
Understanding these basic concepts is essential for anyone starting with JavaScript. Practice writing simple scripts and gradually explore more advanced topics as you become comfortable with the language.