"use strict";
function variable_test1(){
    var name = "sheri khan";
}
variable_test1();
console.log(name); // prints nothing

// // Let restrict to redeclare a variable again throws an error
// let city = "karachi";
// let city = "Hyd";


// In this code country variable is defined globally hence it can accessible from anywhere
var age = 15;
let country;
if(age <= 15){
    country = "pakistan";
}
console.log(country); // pakistan

// In this code user variable is defined using let inside function so its scope
//  is only inside in this function it cannot be accessible by outside of the function
if(true){
    let user = "Ali";
}
console.log(user); // throws an error

// varible declared using var has no scope it is accessible from anywhere
if(true){
    var area = "korangi";
}
console.log(area); // korangi