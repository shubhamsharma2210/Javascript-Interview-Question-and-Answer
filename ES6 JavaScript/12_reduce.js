



/*
?Q what is reduce method
*Reduce are a powerful method in javascript these are excute reducer funcion on each element and return a single value.



reduce Method: JavaScript ka reduce method ek powerful array method hai jo har element pe ek reducer function ko execute karta hai, aur ek single output value return karta hai. Isse aap kai purposes ke liye use kar sakte hain, jaise array elements ko sum karna,
*/



const cart = [
    {
        name: "alooo",
        price: 10,
        quantity: 3
    },
    {
        name: "tamatr",
        price: 10,
        quantity: 1
    },
    {
        name: "began",
        price: 10,
        quantity: 2
    },
]

const totalCost = cart.reduce((accumlater, item) => {
    return accumlater + item.price * item.quantity
},30)
console.log(totalCost)