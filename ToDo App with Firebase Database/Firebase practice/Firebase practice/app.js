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
    console.log(task);
    firebase.database().ref('Tasks').child(firebaseKey).set(task);
    taskID++;
    // getAllData();
    
}

function getAllData(){
    var data = firebase.database().ref("Tasks").once('value',function(data){
        // console.log(data.val()['-MEgUV2Dli7VLfNyGCva']);
        var dataTable = document.getElementById("dataTable");
        console.log(dataTable);
        for(var key in data.val()){
            var instance = data.val()[key];
            var row = document.createElement("tr");
            var col1 = document.createElement("td");
            var col2 = document.createElement("td");
            col1.appendChild(document.createTextNode(instance.Id));
            col2.appendChild(document.createTextNode(instance.Task_name));
            row.appendChild(col1);
            row.appendChild(col2);
            // console.log(row);
            dataTable.appendChild(row)
            
            // console.log(instance.Id);
            // console.log(instance.Task_name);
        }
    });
}

getAllData();