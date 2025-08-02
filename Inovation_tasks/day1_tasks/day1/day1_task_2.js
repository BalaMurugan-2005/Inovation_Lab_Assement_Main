console.log("=== JavaScript Types & Type Conversion ===");
//  Primitive Types
let num = 100;             
let str = "150";               
let bool = true;            
let nullVal = null;            
let undef;                    
let obj = { name: "Bala Murugan P", age: 19 };  
//  Displaying types
console.log("Number:", num);         
console.log("String:", str);         
console.log("Boolean:", bool);       
console.log("Null:", nullVal);       
console.log("Undefined:", undef);    
console.log("Object:", obj);          
//  Type Conversion
let nToStr = String(num);     
let sToNum = Number(str);      
let auto = "10" * 2;          
console.log("Number to String (String(num)):", nToStr);  
console.log("String to Number (Number(str)):", sToNum);   
console.log("Implicit Conversion (\"10\" * 2):", auto);    
