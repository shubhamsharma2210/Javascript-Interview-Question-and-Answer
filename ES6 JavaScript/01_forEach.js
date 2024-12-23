 /*
  ! Q1. What is forEach
* forEach execute a function on each element but not return anything.
* But always return only undefined
 
 */

const number = [5,4,32,3,4]
// let sum = 0
number.forEach((num) => {
 let newNumber =   num * 2
    console.log(newNumber)
    
})

