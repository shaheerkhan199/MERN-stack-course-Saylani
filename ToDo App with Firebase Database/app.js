// Custom JS code
var inputBox = document.getElementById("inputBox");
var addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", addTask);
// var taskID = 1;
function addTask() {
    var firebaseKey = firebase.database().ref('Tasks').push().key;
    var task = {
        Task_name: inputBox.value,
        // ID : taskID,
        Id: firebaseKey,
    }
    firebase.database().ref('Tasks').child(firebaseKey).set(task);
    inputBox.value = "";
}
var counter = 1;
function getAllData() {
    var dataTable = document.getElementById("dataTable");
    
    // Creating table header
    var headerRow = document.createElement("tr");
    var headerCol1 = document.createElement("td");
    var headerCol2 = document.createElement("td");
    var headerCol3 = document.createElement("td");
    var headerCol4 = document.createElement("td");

    headerCol1.appendChild(document.createTextNode("S.No"));
    headerCol2.appendChild(document.createTextNode("Task"));
    headerCol3.appendChild(document.createTextNode("Edit"));
    headerCol4.appendChild(document.createTextNode("Delete"));
    headerRow.appendChild(headerCol1);
    headerRow.appendChild(headerCol2);
    headerRow.appendChild(headerCol3);
    headerRow.appendChild(headerCol4);
    dataTable.appendChild(headerRow);

    // Fetching data from firebase database
    // This function run as many times as data instances in database
    var data = firebase.database().ref("Tasks").on('child_added', function (data) {
        // Creating table rows and columns
        var row = document.createElement("tr");
        var col1 = document.createElement("td");
        var col2 = document.createElement("td");
        var col3 = document.createElement("td");
        var col4 = document.createElement("td");

        // Creating element nodes
        var editBtn = document.createElement("button");
        editBtn.innerHTML = "Edit";
        editBtn.onclick = editData;
        // editBtn.setAttribute("onclick", "editData(this)")
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

function editData(e) {
    // console.log(e.toElement);
    var editBtnElement = e.toElement;
    var keyOfCurrentObject = editBtnElement.getAttribute("id");
    console.log(keyOfCurrentObject);
    // console.log("edit btn clicked")
}
function deleteData(e) {
    // Getting the id of the current data instance in which user click delete button
    var deleteBtnElement = e.toElement;
    var keyOfCurrentObject = deleteBtnElement.getAttribute("id");

    // Removing data instance from database 
    firebase.database().ref("Tasks").child(keyOfCurrentObject).remove();

    // Updating table after deleting data
    var dataTable = document.getElementById("dataTable");
    dataTable.innerHTML = "";
    counter = 1;
    getAllData();
    
}
function deleteAllData(){
    firebase.database().ref("Tasks").remove();
    var dataTable = document.getElementById("dataTable");
    dataTable.innerHTML = "";
    counter = 1;
    getAllData();
}