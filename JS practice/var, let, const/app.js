"use strict";
function variable_test1(){
    var name = "sheri khan";
}
variable_test1();
console.log(name); // prints nothing

// // Let restrict to redeclare a variable again throws an error
let city = "karachi";
let city = "Hyd";


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

// const is used to declare constant variables
// constant variables are the variables whose value cannot be changed throughout the code
const pi = 3.15; // declared pi as constant variable
function get_area(){
    pi = 5.4; // trying to update the value of constant variable resulting throws an error
    var area = pi * 10 * 10;
    console.log(area);
}
get_area();

// syntax error: missing initialization
const name;

// Another example of let and var
for (var i = 0; i < 10; i++) {
    // Code
}
// i is still accessible here
console.log(i); // 10

for (let j = 0; j < 10; j++) {
    // Code
}
// j is not accessible here - throws an error
console.log(j);