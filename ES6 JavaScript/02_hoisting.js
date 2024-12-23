/* 
! Q1. What is hoisting ?
Ans - hoisting is a javascript behaviour variable and function are declair 
on the top of the scope during compalition time.



*/
console.log(b)
var b = "hello"       //output - undefined  


console.log(c)
let c = "lll"   //output -: throw reference error
console.log(d)
const d = "lll"   //output -: throw reference error, hositing not intialized
 
hello()
function hello(){
    var a = "a"
    console.log(a)
}                            //output - a




