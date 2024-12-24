/* 
 ? what is optional chaining
 Ans -: ?. these operator are optional chaning these are removed unneccessary error



*/

const restaurant = {
    name: "sharma ji",
    add: "agra",
    opening: {
        mon: {
            open: "12",
            close: "11"
        },
        tues: {
            open: "12",
            close: "11"
        },
    }
}

console.log(restaurant.opening?.wed?.close)