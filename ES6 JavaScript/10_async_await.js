// ? What is async and await keyword in js
// * async and await keyword are modern features in javascript 
// *That make working asynchronous readable and manageable.
// *They help write code look like that sync and but it actully code async.

// ! async -:
// * When you declaire a function with the async keyword, it automatically return a promiss
// * it allows to use await keyword inside it.

// ! await -:
// * The await keyword are used only inside async function.
//* it make js wait for a promise to resolve and reject 

/* 

Example:
Imagine you are making a cup of tea:

Boil water (this takes some time).

Brew tea (wait for the water to boil first).

Pour tea (wait for the tea to brew).

Enjoy tea.

*/

// Async function to make tea

// async function makeTea() {
//     console.log("starting to make tea")

//     // Boil waiter
//     await boilWater()
//     console.log("water is boiled")

//     await brewTea()
//     console.log("Tea is brewed")

//     await PourTea()
//     console.log("This is ready to enjoy")
// }

// // Simultaes boil water (Take 2 minutes)

// function boilWater(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve()
//         },2000)
//     })
// }

// function brewTea() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve()
//         }, 2000)
//     })
// }

// function PourTea(){
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve()
//         },2000)
//     })
// }

// makeTea()


const makeRice = async() => {
    console.log("we are making the Rice")

    await washRice() 
    console.log("wash the rice")

    await burnGas()
    console.log("Burn the Gas")

    await putVegitable()
    console.log("Put the vegetables")

    await offCooker()
    console.log("off the cooker")

    await waitingmaking()
    console.log("wait for the make the rice")

    await readyToEat()
    console.log("Enjoy Fry Riced - _ - !")
}


function washRice() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        },2000)
    })
}

function burnGas() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        },2000)
    })
}

function putVegitable() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        },2000)
    })
}

function offCooker() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        },2000)
    })
}
function waitingmaking() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        },4000)
    })
}
function readyToEat() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        },3000)
    })
}


makeRice()

