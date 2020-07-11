// I have created the functionality of this Todo App using two different approaches
// Approach or Method 1
// function addTask() {
//     var taskValue = document.getElementById("textBox").value;
//     if(taskValue == ""){
//         alert("Please Enter some task in textbox");
//     }
//     else{
//         var orderList = document.getElementById("orderlist");
//         newLI = document.createElement("li");
//         newText = document.createTextNode(taskValue);
//         newLI.appendChild(newText);
//         orderList.appendChild(newLI);
//         document.getElementById("textBox").value = "";
//     }   
// }
// function deleteAllTask(){
//     var orderList = document.getElementById("orderlist");
//     orderList.innerHTML = "";   
// }

// Approach or Method 2
var allTasks = ['Eat', 'Sleep', 'Code'];
refreshList();
function addTask() {
    var newTaskValue = document.getElementById("textBox").value;
    if (newTaskValue == "") {
        alert("Please Enter some task in textbox");
    }
    else {
        allTasks.push(newTaskValue);
        document.getElementById("textBox").value = "";
        refreshList();
    }
}
function refreshList() {
    orderList = "";
    orderList += "<ol>";
    for (var i = 0; i < allTasks.length; i++) {
        listItem = "<li>" + allTasks[i] + "</li>";
        orderList += listItem;
    }
    orderList += "</ol>";
    document.getElementById("orderListSpace").innerHTML = orderList;
}
function deleteAllTask(){
    allTasks = [];
    // document.getElementById("orderListSpace").innerHTML = "";  
    refreshList(); 
}