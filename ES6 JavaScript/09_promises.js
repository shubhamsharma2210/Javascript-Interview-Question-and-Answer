/* 
? Q- What is Promises in js ?
Ans -: 
* Promises are used to handle javascript asynchronous operation.
* this promiss are guraunty that give you result in future 
* it can be either successfull or unSuccessfull
* which means opertion are take some time to complete like fecthing data on the server

Promise have three state
*Pending -: Operation has start but not yet complete
*Fullfill -: Operation has successfull complete
*Rejected -: the Operation has failed



*/

let promise = new Promise(function(resolve, reject){
    let orderSuccessFull = false
    if(orderSuccessFull){
        resolve("Book order Successfully")
    }else{
        reject("Book is out of stock")
    }
})

// handling the promises

promise.then((message) => {
    console.log(message) //output Book order successfull 'if promiss will be resolve'
}).catch((error) => {
    console.log(error) //output book is out of stock  'if promiss will be reject
})