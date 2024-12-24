/* 
? null coalescing 
Ans -: null coalescing is ?? operator 
??operator in js
Nullish Coalescing Operator ?? in JavaScript
The Nullish Coalescing Operator (??) is a logical operator introduced in ES2020 (also known as ES11). It is used to provide a default value when dealing with null or undefined values. It is similar to the logical OR operator (||), but it only considers null or undefined as invalid values, while || considers any falsy value (such as 0, NaN, "", etc.) as invalid.





*/

let numGuest = 0
let guest = numGuest  ?? 10
console.log(guest)


let value1 = null; 
let value2 = undefined; 
let value3 = 0; 
let value4 = ""; 

let value5 = "Hello"; 
console.log(value1 ?? "Default"); 
// Output: "Default" 
console.log(value2 ?? "Default"); 
// Output: "Default" 
console.log(value3 ?? "Default");
 // Output: 0 
 console.log(value4 ?? "Default"); 
//  Output: "" 
console.log(value5 ?? "Default")
