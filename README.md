# Learning Playwright 3x

This repository contains JavaScript fundamentals exercises completed while learning the basics of programming and preparing for Playwright automation testing. The files are organized chapter-wise and include practical examples, naming rule exercises, literal concepts, and notes for self-learning.

## Repository Overview

- `00_chapter_GENAI/` - General AI learning and notes space
- `01_chapter_Javascript/` - JavaScript basics and first programs
- `02_chapter_Javasript/` - Variable scoping and `let` concepts
- `03_chapter_identifier/` - JavaScript identifier rules and naming conventions
- `04_chapter_Literal/` - JavaScript literals, `null`, `undefined`, numbers, and special numeric values
- `IQ_Notes/` - Learning notes and reference material
- `SeleniumFramework/` - Selenium-related workspace area

---

## 01_chapter_Javascript

### File: `01_HelloWorld.js`

This is the first JavaScript exercise and includes:

- Basic `console.log()` usage
- Printing greetings to the console
- Declaring variables using `let`
- Displaying numeric values with string interpolation and comma output

Example concepts covered:

- Output messages to terminal
- Storing values in variables
- Printing variables using `console.log()`

---

## 02_chapter_Javasript

### File: `02_let_concept.js`

This exercise focuses on the `let` keyword and block-scoped variables.

Topics covered:

- Declaring variables with `let`
- Printing variable values
- Using `let` inside a loop block
- Observing variable behavior in loop scope
- A deliberately broken snippet to demonstrate runtime issues

Key learning:

- `let` creates block-scoped variables
- Variables declared inside loops are not the same as outer variables
- JavaScript errors can occur when referencing undefined values or invalid identifiers

---

## 03_chapter_identifier

### File: `03_Identifier_Rules.js`

This file demonstrates JavaScript identifier rules and valid naming patterns.

Topics covered:

- Valid identifiers starting with `$` and `_`
- Variables with letters and numbers
- Naming examples such as `pramod_dutta`, `pramod$dutta`, and `pramodu1232`
- Handling invalid identifiers with comments
- Variable declarations using `var`

### File: `04_03_Identifier_Rues_Part2.js`

This file expands on naming conventions and variable styles.

Topics covered:

- `camelCase` variable naming
- `PascalCase` naming style
- `snake_case` naming style
- `SCREAMING_SNAKE_CASE` for constants
- Hungarian notation examples

Examples included:

- `firstName`, `lastName`
- `userName`, `totalPrice`, `isLoggedIn`
- `UserProfile`, `ShoppingCart`
- `MAX_SIZE`, `API_KEY`, `DATABASE_URL`
- `strName`, `bActive`, `nCount`, `arrItems`

### File: `05_Comments.js`

This file explains commenting styles in JavaScript.

Topics covered:

- Single-line comments using `//`
- Multi-line comments using `/* */`
- JSDoc-style comments
- Keyboard shortcuts used in editors for toggling comments

### File: `06_identifier_IQ.js`

This file is an IQ/practice exercise focusing on valid and invalid JavaScript identifiers.

Topics covered:

- Valid names: `validName`, `_private`, `$jquery`, `item1`, `_temp2`
- Invalid names commented out intentionally
- Examples of reserved words and syntax errors
- Unicode identifier examples such as `café` and `变量`
- Naming styles across `camelCase`, `PascalCase`, and `snake_case`

---

## 04_chapter_Literal

### File: `07_Literal.js`

This exercise covers JavaScript literals and the `typeof` operator.

Topics covered:

- String literals
- Boolean literals
- Numeric literals
- `null` literal
- `undefined` literal
- Checking variable types using `typeof`

Examples included:

- `let age = "pramod"`
- `let isStudent = true`
- `let pi = 3.14`
- `let nullValue = null`
- `let undefinedValue;`

### File: `08_null_undefined.js`

This is a concept exercise comparing `undefined` and `null`.

Topics covered:

- Variables declared but not assigned
- Explicitly setting a value to `null`
- The difference between `undefined` and `null`
- The JavaScript quirk where `typeof null === "object"`

Important understanding:

- `undefined` means the variable has no value assigned yet
- `null` means the developer intentionally set an empty value

### File: `09_Null_IQ.js`

This file was used for a quick IQ-style check around `null` and `typeof`.

Concepts revisited:

- Assigning `null` to a variable
- Printing the value and its type

### File: `10_Literal.js`

This file looks at different numeric literal formats.

Topics covered:

- Decimal numbers
- Negative values
- Zero
- Hexadecimal numbers (`0xFF`)
- Octal numbers (`0o77`)
- Scientific notation (`1e6`, `1.5e-4`)

### File: `11_Number.js`

This is a detailed number-type study exercise in JavaScript.

Topics covered:

- Decimal numbers
- Binary numbers (`0b1010`)
- Octal numbers (`0o52`)
- Hexadecimal numbers (`0x2A`)
- Floating-point values
- Exponential notation (`1.5e3`, `1.5e-3`, `2E10`)

Key takeaway:

- In JavaScript, all numbers are typically of type `number` except `BigInt`

### File: `12_Number_Part2.js`

This file extends the number lesson with advanced numeric concepts.

Topics covered:

- Numeric separators (`1_000_000`, `0b1010_0001`, `0xFF_FF`)
- `BigInt` creation and usage
- `Infinity` and `-Infinity`
- `NaN` (Not a Number)
- Invalid math operations producing `NaN`

Examples included:

- `let big = 123456789012345678901234567890n;`
- `BigInt("123456789012345678901234567890")`
- `console.log(1 / 0)`
- `console.log(0 / 0)`

---

## IQ_Notes

The `IQ_Notes/` folder includes learning notes and reference documents created during the course.

Examples:

- `IQ_Notes/Learningplaywright3x/README.md` - repository summary notes
- `IQ_Notes/Learningplaywright3x/01_chapter_Javascript/01_HelloWorld.js` - basic JavaScript example in notes folder
- `IQ_Notes/Learningplaywright3x/iq_notes/javascript-basics.md` - JavaScript basics study notes
- `IQ_Notes/Learningplaywright3x/iq_notes/02_Commands.md` - command references and learning notes

---

## Learning Outcomes

By completing these exercises, the learner practiced:

- JavaScript syntax and structure
- Variables and constants
- Identifier rules
- Comments and code readability
- Data types and literals
- `null` vs `undefined`
- Number systems and numeric special values
- Using `console.log()` for debugging and learning

---

## Notes

This repository is primarily a study repository for JavaScript fundamentals, created as part of hands-on learning for testing and automation work with Playwright. The exercises are written in plain JavaScript and are intended to build a strong foundation before moving into automation frameworks.
