let readlineSync=require("readline-sync");
var water =readlineSync.questionInt("enter water level ");
if(water<1){
    console.log("more water needs to be filled")
}
else if(water>=1 && water<=10 ){
    console.log("no need to fill more water")
}
else{
    console.log("overflow")
}