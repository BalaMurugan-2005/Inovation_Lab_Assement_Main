console.log("=== Task 3: Operators ===");
// Arithmetic Operators
let a = 10, b = 3;
console.log("Add:", a + b);           // Addition
console.log("Subtract:", a - b);      // Subtraction
console.log("Multiply:", a * b);      // Multiplication
console.log("Divide:", a / b);        // Division
console.log("Modulus:", a % b);       // Modulus
// Assignment Operators
let x = 5;
x += 2;                             
console.log("x += 2:", x);            // Output: 7
x -= 1;                               
console.log("x -= 1:", x);            // Output: 6
// Comparison Operators
console.log("10 == '10':", 10 == '10');    
console.log("10 === '10':", 10 === '10');   // Strict Equal (type + value checked)
console.log("5 > 3:", 5 > 3);              
console.log("5 <= 5:", 5 <= 5);     
// Logical Operators
console.log("true && false:", true && false);   // AND
console.log("true || false:", true || false);   // OR
console.log("!true:", !true);                   // NOT
// Ternary Operator
let mark = 60;
let grade = (mark >= 50) ? "Pass" : "Fail";     // condition ? trueResult : falseResult
console.log("Ternary Result:", grade);          // Output: Pass
// Bitwise Operators
console.log("5 & 1:", 5 & 1);     // AND bitwise
console.log("5 | 1:", 5 | 1);     // OR bitwise
console.log("5 ^ 1:", 5 ^ 1);     // XOR bitwise
console.log("~5:", ~5);           // NOT bitwise
console.log("5 << 1:", 5 << 1);   // Left shift
console.log("5 >> 1:", 5 >> 1);   // Right shift
// Increment & Decrement Operators
let count = 5;
console.log("Original:", count);             // Original value
console.log("Post-Increment:", count++);     // Prints 5, then count becomes 6
console.log("After:", count);                // Now count is 6
console.log("Pre-Decrement:", --count);      // Decrease first, then print (5)
