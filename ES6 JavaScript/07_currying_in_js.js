/* 

? What is currying in js ?
 *ANS -: 
 * JavaScript mein currying ek technique hai jisme ek function multiple arguments lene ke bajay ek-ek argument leta hai aur har argument ke liye ek naya function return karta hai. Ye process tab tak chalti hai jab tak sare arguments provide nahi ho jaate.

!Simpler Terms: 
*Currying ka matlab hai ek function ko tod kar chhote-chhote functions mein divide karna, jisme har function ek argument leta hai.

*in JavaScript, currying is a technique where a function takes multiple arguments one at a time, returning a new function for each argument until all arguments are provided.

*Simpler Terms: Currying transforms a function with multiple arguments into a sequence of functions, each taking a single argument.



*/

function addthreeNumber(a) {
    return function(b) {
        return function(c){
            return a + b + c
        }
    }
}
let add = addthreeNumber(5)(5)(4)
console.log(add)


const sendEmail = (to) => (subect) => (body) => {
    console.log(`send to ${to} subject - ${subect} body - ${body}`)
  
}
sendEmail("shubham@gmail.com")("confirmation male")("your order has been reached on your address")