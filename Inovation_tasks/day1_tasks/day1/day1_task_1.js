console.log("=== Task 1: Variables in JavaScript ===");
var name = "Bala Murugan P";
console.log("Name declared with var:", name);
 // var can be reassigned
name = "New Name"; 
console.log("Modified var name:", name);
// let declaration
let age = 19;
console.log("Age declared with let:", age);
// let can also be reassigned
age = 20;  
console.log("Modified let age:", age);
// const declaration
const city = "Coimbatore";
console.log("City declared with const:", city);
// Try reassigning const
try {
  //  Error: const cannot be reassigned
  city = "New City"; 
  console.log("Modified const city:", city);
} catch (error) {
  console.error("Error reassigning const city:", error.message);
}
