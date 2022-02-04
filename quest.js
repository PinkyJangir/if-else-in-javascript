// let readlineSync=require("readline-sync");
// var num1=readlineSync.questionInt("enter the number");
// if(num1/2==0);{
//     console.log("even")
// }

// else{
//     console.log("odd")
// }

let readlineSync = require("readline-sync");
var num=readlineSync.questionInt("enter a number");
a=(num/2)*2
if(a===num){
   console.log("even")
}
else{
   console.log("odd")
}
