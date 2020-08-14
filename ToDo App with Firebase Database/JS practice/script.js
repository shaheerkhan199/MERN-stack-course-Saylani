function welcomeNote(msg){
    alert(msg);
}
function changeImage(imageBoxID,imgName){
    var image = document.getElementById(imageBoxID);
    image.src=imgName;
}
function makeFieldYellow(){
    this.style.backgroundColor='yellow';
}
function makeFieldWhite(){
    this.style.backgroundColor='white';
}
function checkAddress(email){
    var fieldValue = document.getElementById(email).value;
    if(fieldValue == ""){
        alert("This is required");
    }
}
function increment(textBoxId){
    var textBox = document.getElementById(textBoxId);
    var textBoxValue = Number(textBox.value);
    textBoxValue++;
    textBox.value = textBoxValue;
}
function decrement(textBoxId){
    var textBox = document.getElementById(textBoxId);
    var textBoxValue = Number(textBox.value);
    if(textBoxValue != 1){
        textBoxValue--;
    }
    textBox.value = textBoxValue;
}
function expandPara(){
    var para = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum quis tempora expedita earum optio nihil delectus quae ab animi doloremque cupiditate, ipsum aperiam numquam laboriosam dolor dicta! Sed, quae quam?";
    document.getElementById("para").style.color = "red";
    document.getElementById("para").style.backgroundColor = "black";
     document.getElementById("para").style.fontSize = "35px";
     document.getElementById("link").style.visibility = "hidden";
}
function makeInvisible(){
    // document.getElementById('image').style.visibility = "hidden";
    // Both lines work same it hide the images
    document.getElementById("image").className += ' anotherClass';
}
function applyFormatting(){
    var elements = document.getElementsByTagName("p");
    for (var i=0; i<elements.length; i++){
        var random  = Math.floor(100000 + Math.random() * 900000);
        var color = "#"+random;
        // console.log(color);
        elements[i].style.color = color;
        elements[i].style.fontSize = "35px";
    }
}
function changeContent(){
    var divElement = document.getElementById("div");
    var paraElements = divElement.getElementsByTagName("p");
    for (var i=0; i<paraElements.length; i++){
        paraElements[i].innerHTML = "This is inner paragraphs";
    }
}
function highlightRows(){
    var table = document.getElementById("tbl");
    var rows = table.getElementsByTagName("tr");
    for(var i=0; i<rows.length; i++){
        rows[i].style.backgroundColor = "yellow";
    }
}

// Assigning a function to a variale
var testFunction = function (name="admin"){
    console.log("Hello world from "+name);
}
testFunction("Sheri");

// Arrow function of Javascript ES6
var birthday_wish = (name) =>{
    console.log("Happy Birthday "+name);
}
birthday_wish("ALi");

