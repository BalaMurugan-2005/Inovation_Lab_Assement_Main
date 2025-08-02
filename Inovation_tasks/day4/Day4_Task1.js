console.log("=== Math Built-in Functions ===");

let randomNum = Math.random();
console.log("Random number (0–1):", randomNum);

let roundUp = Math.ceil(4.2);
console.log("Math.ceil(4.2):", roundUp);

let roundDown = Math.floor(4.8);
console.log("Math.floor(4.8):", roundDown);

let roundNearest = Math.round(4.5);
console.log("Math.round(4.5):", roundNearest);

let numbers = [3, 9, 2, 12, 7];
let min = Math.min(...numbers);
let max = Math.max(...numbers);
console.log("Numbers array:", numbers);
console.log("Min:", min);
console.log("Max:", max);

console.log("\n=== String Built-in Functions ===");

let str = "  JavaScript is Powerful!  ";
console.log("Original string:", `"${str}"`);

let trimmed = str.trim();
console.log("Trimmed:", `"${trimmed}"`);

let upper = trimmed.toUpperCase();
console.log("Uppercase:", upper);

let lower = trimmed.toLowerCase();
console.log("Lowercase:", lower);

let sub = trimmed.substring(0, 10);
console.log("Substring (0-10):", sub);

let hasPowerful = trimmed.includes("Powerful");
console.log("Includes 'Powerful'?", hasPowerful);

let replaced = trimmed.replace("Powerful", "Awesome");
console.log("After replace:", replaced);

let words = trimmed.split(" ");
console.log("Split into words:", words);

console.log("\n=== Analysis ===");
console.log("✔ Math functions help with numeric operations like rounding and comparisons.");
console.log("✔ String functions help manipulate and analyze text.");
