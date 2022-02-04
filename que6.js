var num1 = 300 - 123;
let readlineSync = require("readline-sync");
var num2=readlineSync.questionInt("enter a number");
if (num1===num2){
    console.log("it is equal")
}
else {
    console.log("it is not equal")
}