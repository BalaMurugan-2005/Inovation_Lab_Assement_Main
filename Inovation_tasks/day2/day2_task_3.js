console.log("=== Task 3: Break and Continue ===");
// Example 1: Find the first prime number between 5 and 25
console.log("Finding the first prime number between 5 and 25:");
for (let num = 5; num <= 25; num++) {
  let prime = true;
  for (let x = 2; x < num; x++) {
    if (num % x === 0) {
      prime = false;
      break; // not a prime, stop inner loop
    }
  }
  if (prime) {
    console.log("First prime number found:", num);
    break; // stop outer loop after first prime
  }
}
// Example 2: Print only odd numbers between 10 and 30
console.log("Odd numbers between 10 and 30:");
for (let y = 10; y <= 30; y++) {
  if (y % 2 === 0) {
    continue; // skip even numbers
  }
  console.log(y);
}
