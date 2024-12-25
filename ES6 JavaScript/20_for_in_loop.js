/* 
? What is for-in loop?
*Definition: The for...in loop is used to iterate over the enumerable properties (keys) of an object.
for in loop are work on object and itrate the key of object.
*/


const person = {
    name : "shubham",
    age : "24",
    address : "agra"
}
for(let value in (person)){
    console.log(value)
}