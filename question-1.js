// let isTrue = "True";
// if(isTrue === "True"){
//   console.log("Both are same")
// }
// else {
//   console.log("Please run it. if all conditions false")
// }

let readlineaSync=require("readline-sync")
var number =readlineaSync.questionInt("enter the number")
 
if(number%3 === 0){
   console.log("choco")
}
else if(number % 7==0){
   console.log("late")
}
else if(number%3==0 && number%7==0) {
   console.log("Chocolate")
}
else {
   console.log("Not divisible by 3 , 7")
}
