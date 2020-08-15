// Custom JS code
var inputBox = document.getElementById("inputBox");
var addBtn  = document.getElementById("addBtn");
addBtn.addEventListener("click", addTask);
var taskID = 1;
function addTask(){
    // console.log(inputBox.value);
    var firebaseKey = firebase.database().ref('Tasks').push().key;
    // console.log(firebaseKey);
    var task = {
        Task_name : inputBox.value,
        // ID : taskID,
        Id:firebaseKey,
    }
    firebase.database().ref('Tasks').child(firebaseKey).set(task);
    taskID++;
    
}
var counter = 1;
function getAllData(){
    var data = firebase.database().ref("Tasks").on('child_added',function(data){
        var dataTable = document.getElementById("dataTable");

            // Creating table rows and columns
            var row = document.createElement("tr");
            var col1 = document.createElement("td");
            var col2 = document.createElement("td");
            var col3 = document.createElement("td");
            var col4 = document.createElement("td");      

            // Creating element nodes
            var editBtn = document.createElement("button");
            editBtn.innerHTML = "Edit";
            editBtn.onclick = editdata;
            editBtn.setAttribute("id", data.val().Id);
            var deleteBtn = document.createElement("button");
            deleteBtn.innerHTML = "Delete";
            deleteBtn.onclick = deleteData;
            deleteBtn.setAttribute("id", data.val().Id);

            col1.appendChild(document.createTextNode(counter));
            col2.appendChild(document.createTextNode(data.val().Task_name));
            col3.appendChild(editBtn);
            col4.appendChild(deleteBtn);
            row.appendChild(col1);
            row.appendChild(col2);
            row.appendChild(col3);
            row.appendChild(col4);
            dataTable.appendChild(row);

            counter++;
    });
}

getAllData();

function editdata(){
    console.log("edit btn clicked")
}
function deleteData(){
    console.log("delete btn is clicked")
}