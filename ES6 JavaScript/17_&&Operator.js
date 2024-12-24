/* 
? what is && operator
Ans. in the javascript && operator are used to evulates two expression if return true both are expression true,
if one are false expression then return false

! false expression are -: [0, null, undefined, Nan ]


*/

console.log(null && "shubham")

let age = 30;
let drivingLicence= true 
let payment = 3000

if(age > 18 && drivingLicence && payment > 2000){
    console.log("your are elgiable")
}
else{
    console.log("you are not eligable")
}