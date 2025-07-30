console.log("=== Task 2: Loop Control Practice ===");
// Example 1: while loop - Print numbers from 1 to 7
let a = 1;
console.log("Numbers from 1 to 7 using while loop:");
while (a <= 7) {
  console.log(a);
  a++;
}
// Example 2: do...while loop - Ask until number is greater than 10
let userInput;
do {
  userInput = prompt("Please enter a number greater than 10:");
} while (userInput <= 10);
console.log("You entered:", userInput);
// Example 3: for loop - Print first 6 natural numbers
let total = 6;
console.log(`First ${total} natural numbers using for loop:`);
for (let b = 1; b <= total; b++) {
  console.log(b);
}
// Example 4: Multiplication table for number 4
let tableNum = 4;
console.log(`Multiplication Table of ${tableNum}:`);
for (let c = 1; c <= 10; c++) {
  console.log(`${tableNum} x ${c} = ${tableNum * c}`);
}
