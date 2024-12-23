/* 
! Q1. what is map ?  
 *Ans -: map method is excute function on each element of array and return a new array.

 map method is create a new array whatever map is excute funtion on each element and then return a new array

 ! key difference 
 1 - foreach is return nothing and return only undefined  
 1. Map is return a new array
****************************************************************************************
 2. forEach uses perform the side effect without create a new array.
 2. Map are do the transform elments and create a new array


*/

const person = ['shubhm shrma ', 'ankush', 'lalit', 'kajal jaanu']
const newPerson = person.map(element => {
  return  element.toUpperCase() 
});
console.log(newPerson)