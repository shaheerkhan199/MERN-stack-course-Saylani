var para = document.getElementById("timer");

// setTimeOut runs only one time when the provide seconds spends
// setTimeout(function(){
//     para.innerHTML = "Hello";
// },3000);

// setInterval runs the function continious with duration provided in the parameter
var i = 1;
setInterval(function(){
    para.innerHTML = i;
    i++;
}, 1000);