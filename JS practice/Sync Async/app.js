var para = document.getElementById("timer");

// setTimeOut runs only one time when the provide seconds spends
// setTimeout(function(){
//     para.innerHTML = "Hello";
// },3000);

// 
var i = 1;
setInterval(function(){
    // para.innerHTML += " Hello";
    para.innerHTML = i;
    i++;
}, 1000);
// console.log("End line");