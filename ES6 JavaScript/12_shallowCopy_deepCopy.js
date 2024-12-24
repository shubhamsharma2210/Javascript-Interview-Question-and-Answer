/* 

? WHAT IS SHALLOW COPY ?
*ANS -: SHALLOW COPY IS COPY OF OBJECT. WHERE ONLY THE TOP LEVEL PROPERTIES ARE COPIED.
        * BUT CHANGES THE NESTED OBJECT NOT EFFECTED THE TOP LEVEL ENTTIES.

? WHAT IS DEEP COPY IN JS
*ANS. 
What: Copies all levels of the object, including nested objects.

Effect: Changes to nested objects in the copy do not affect the original.

*/



// ! SHALLOW COPY EXAMPLE

// const original = {
//     name: "shubham sharma",
//     age: 24,
//     address: {
//         city: "agra",
//         village : "pinahat"
//     }
// }

// const shallowCopy = {...original}

// shallowCopy.name = "ankush garg"
// shallowCopy.address.city = "murena"

// console.log(original.name) //not affected the top level properties
// console.log(original.address.city) // change the nested properties


//! DEEP COPY IN JS  

const original = {
    name: "shubham sharma",
    age: 24,
    address: {
        city: "agra",
        village : "pinahat"
    }
}

const deepCopy = JSON.parse(JSON.stringify(original))

deepCopy.address.city = "morena"
original.name = "ankuh"
console.log(original.name)
console.log(deepCopy.address.city)