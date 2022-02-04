let readlineSync=require("readline-sync");
var varx=readlineSync.questionInt("enter the number");
if(varx%2===0){
    console.log("its divisible by 2")
}
else{
    console.log("its not divisible by 2")
}