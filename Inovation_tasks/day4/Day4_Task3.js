let numbers = [1, 2, 3, 4, 5];

console.log("=== forEach() Output ===");
numbers.forEach(function(num) {
    console.log(num);
});

console.log("\n=== map() Output (squared) ===");
let squares = numbers.map(function(num) {
    return num * num;
});
console.log(squares);

console.log("\n=== for-in Loop (indexes) ===");
for (let index in numbers) {
    console.log(index, "=>", numbers[index]);
}

console.log("\n=== for-of Loop (values) ===");
for (let value of numbers) {
    console.log(value);
}
