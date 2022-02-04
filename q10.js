let readlineSync=require("readline-sync");
var varx=readlineSync.questionInt("enter the  first number");
var vary=readlineSync.questionInt("enter the second number");
if(varx%vary===0){
    console.log("its divisible");
}
else{
    console.log("tis not divisible");
}