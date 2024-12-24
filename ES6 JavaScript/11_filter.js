/* 
? Q. What is filter method?
*Ans-: it filters out elements from an array based on a specific condition and returns a new array with the elements that meet that condition.



*/







const person = [
    {
        name: "ankush",
        city: "jabalpur"
    },
    {
        name: "lalit",
        city: "jabalpur"
    },
    {
        name: "shubhm",
        city: "agra"
    },
    {
        name: "pavan",
        city: "agra"
    },
]

const findCityAgraPerson = person.filter((person) => {
    if(person.city === 'jabalpur') {
        return true
    }

    else {
        console.log("codition are not meet")
        return false
    }
})

console.log(findCityAgraPerson)