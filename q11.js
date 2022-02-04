let readlineSync=require("readline-sync");
var varx=readlineSync.questionInt("enter the number");
var vary=readlineSync.questionInt("enter the second number");
if (varx>=vary){
    console.log("varx is greater")
}
else{
    console.log("vary is greater")
}