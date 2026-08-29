let studentName;

let studentAge = null;

console.log(studentName);          // undefined
console.log(typeof studentName);    // undefined
console.log(studentAge);             // null
console.log(typeof studentAge);     //object

// Output 

/**undefined
undefined
null
object*/

/*
SIMPLE DEFINITIONS:

undefined -> A variable exists, but it has not been assigned any value yet.
               JavaScript itself sets this automatically.

null      -> A variable exists, but the developer explicitly assigns
               "no value" or "empty".
               It is intentional absence of any value.
*/

var x;
console.log(x);

var audi = null;
console.log(audi);


// ==========================================================
// 1. undefined
// ==========================================================

let userName; // declared but not assigned
console.log(userName);
console.log(typeof userName);

// function greet() {
//     // no return statement
// }

// console.log(greet());

let x1;
x1 = 10;
console.log(x1);


// ==========================================================
// 2. null
// ==========================================================

let profilePicture = null;
console.log(profilePicture);
console.log(typeof profilePicture); // "object" <-- known JS quirk!


// ==========================================================
// 3. Key Differences (Summary Table)
// ==========================================================

/*

| Feature         | undefined                     | null                          |
|-----------------|-------------------------------|-------------------------------|
| Meaning         | Not assigned yet              | Intentionally empty           |
| Who sets it?    | JavaScript automatically      | Developer manually            |
| Type            | undefined                     | object (historical bug in JS) |
| == comparison   | null == undefined -> true     |                               |
| === comparison  | null === undefined -> false   |                               |

*/