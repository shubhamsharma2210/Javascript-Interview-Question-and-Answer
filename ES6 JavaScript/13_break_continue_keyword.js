/*
? break and continue keyword
* break keyword -: Break keyword are used exist the loop;
*continue keyword -: The continue statement is used to skip the current iteration of a loop and continue with the next iteration.








*/

// break keyword
for(let i = 1; i<=10; i++){
    if(i === 5){
        break;
    }
    console.log(i) //1,2,3,4 
}

// continue keyword
for(let i = 1; i<=10; i++){
    if(i === 5){
        continue;
    }
    console.log(i) //1,2,3,4,6,7,8,9,10
}