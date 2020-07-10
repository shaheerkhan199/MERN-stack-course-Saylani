function addTask() {
    var taskValue = document.getElementById("textBox").value;
    if(taskValue == ""){
        alert("Please Enter some task in textbox");
    }
    else{
        var orderList = document.getElementById("orderlist");
        newLI = document.createElement("li");
        newText = document.createTextNode(taskValue);
        newLI.appendChild(newText);
        orderList.appendChild(newLI);
        document.getElementById("textBox").value = "";
    }   
}
function deleteAllTask(){
    var orderList = document.getElementById("orderlist");
    orderList.innerHTML = "";   
}