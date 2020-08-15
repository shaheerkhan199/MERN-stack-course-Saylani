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
    firebase.database().ref("Tasks").on('child_added', function (data) {
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

    // When child is removed update the whole table
    firebase.database().ref("Tasks").on('child_removed', function (oldChildSnapshot) {
        // Removing every thing from table and refatching every tasks from database
        dataTable.innerHTML = "";
        counter = 1;

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

        // Refatching all records from database
        firebase.database().ref("Tasks").once("value", function (data) {
            for (var key in data.val()) {
                var dataObject = data.val();
                var singleObject = dataObject[key];
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
                editBtn.setAttribute("id", singleObject.Id);
                var deleteBtn = document.createElement("button");
                deleteBtn.innerHTML = "Delete";
                deleteBtn.onclick = deleteData;
                deleteBtn.setAttribute("id", singleObject.Id);

                col1.appendChild(document.createTextNode(counter));
                col2.appendChild(document.createTextNode(singleObject.Task_name));
                col3.appendChild(editBtn);
                col4.appendChild(deleteBtn);
                row.appendChild(col1);
                row.appendChild(col2);
                row.appendChild(col3);
                row.appendChild(col4);
                dataTable.appendChild(row);

                counter++;
            }
        });


    });
}

getAllData();

function editData(e) {
    var editBtnElement = e.toElement;
    var keyOfCurrentObject = editBtnElement.getAttribute("id");
    var updatedValueOfTask = prompt("Enter Updated (new) Value");
    // Creating updated(task name) object 
    var task = {
        Task_name: updatedValueOfTask,
        Id: keyOfCurrentObject,
    };
    // Updating object into database
    firebase.database().ref('Tasks').child(keyOfCurrentObject).set(task);

    // Updating the value in table (front end)
    var currentTableRow = editBtnElement.parentNode.parentNode;
    var targetedTask = currentTableRow.childNodes[1];
    targetedTask.innerHTML = updatedValueOfTask;
}
function deleteData(e) {
    // Getting the id of the current data instance in which user click delete button
    var deleteBtnElement = e.toElement;
    var keyOfCurrentObject = deleteBtnElement.getAttribute("id");

    // Removing data instance from database 
    firebase.database().ref("Tasks").child(keyOfCurrentObject).remove();
}
function deleteAllData() {
    // Delete whole Tasks Node (which hold all tasks)
    firebase.database().ref("Tasks").remove();
}