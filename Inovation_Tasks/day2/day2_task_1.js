console.log("=== Task 1: Conditional Statements ===");
// Example 1: Simple if
let age = 19;
if (age >= 18) {
  console.log("You are eligible to vote.");
}
// Example 2: if-else
let studentAge = 16;
if (studentAge >= 18) {
  console.log("You are eligible to vote.");
} else {
  console.log("You are not eligible to vote.");
}
// Example 3: if - else if - else
let score = 67;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 75) {
  console.log("Grade: B");
} else if (score >= 60) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}
// Example 4: switch statement
let today = 5;
switch (today) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day");
}
// Example 5: Positive / Negative / Zero
let value = -3;
if (value > 0) {
  console.log("Positive number");
} else if (value < 0) {
  console.log("Negative number");
} else {
  console.log("Zero");
}