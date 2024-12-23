/* 
 ? WHat is clousers in js
* A clouser is features in javascript where an inner function has access outer function variable. 
*A clouser give to you access to an outer function scope from an inner function. 
* clousers are create when you create the function



*/


function one() {
    const str = "shubham sharma"
    function two() {
        // console.log(str)
        function three() {
            console.log(str)
        }
        three()
    }

    two()
}
one()


// counter

function creatCounter(){
    let count = 0;
   return function(){
        count++;
        return count;
    }
}
const counter = creatCounter()
console.log(counter())
console.log(counter())
console.log(counter())
