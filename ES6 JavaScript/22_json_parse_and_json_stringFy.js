/*
what is difference btw JSON.parse() and JSON.stringify ?


JSON.parse() = json.parse are convert to json string javascript Object
JSON.stringify() = json.stringiFy() are convert the javascript object to JSON string



*/

const jsonString = '{"name": "shubham", "age" : 22}'
const jsonObject = JSON.parse(jsonString)
console.log(jsonObject) //{ name: 'shubham', age: 22 }

const JsonObject = {name : "shubham" , age: 44}
const JsonString = JSON.stringify(JsonObject)
console.log(JsonString)
