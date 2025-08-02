console.log("=== Array of Numbers ===");

let numbers = [10, 20, 30, 40, 50];
console.log("Original numbers:", numbers);

numbers[2] = 35;
console.log("Modified index 2:", numbers);

console.log("Length of numbers array:", numbers.length);

numbers.push(60);
console.log("After push(60):", numbers);

numbers.pop();
console.log("After pop():", numbers);

numbers.shift();
console.log("After shift():", numbers);

numbers.unshift(5);
console.log("After unshift(5):", numbers);


console.log("\n=== Array of Strings ===");

let fruits = ["apple", "banana", "cherry"];
console.log("Original fruits:", fruits);

fruits[1] = "blueberry";
console.log("Modified index 1:", fruits);

console.log("Length of fruits array:", fruits.length);

fruits.push("date");
console.log("After push('date'):", fruits);

fruits.pop();
console.log("After pop():", fruits);

fruits.shift();
console.log("After shift():", fruits);

fruits.unshift("avocado");
console.log("After unshift('avocado'):", fruits);
