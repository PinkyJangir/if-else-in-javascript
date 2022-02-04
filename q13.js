let readlineaSync = require("readline-sync");
var age=readlineaSync.questionInt("enter age");
if (age>=5){
    console.log("you can go to school")
}
if(age>=18){
    console.log("in age can vote in elections")
}
if(age>=21){
    console.log("you can drive a car")
}
if(age>=24){
    console.log("you can marry")
}
if (age>=25){
    console.log("legally drink")
}
