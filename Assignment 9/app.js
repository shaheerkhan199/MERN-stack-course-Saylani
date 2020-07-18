//Chapter 1
// Question 1
alert("Hello Visitor Welcome to my Awesome website");

// Question 2
alert("Error! Please enter a valid password");

// Question 3
alert("Welcome to JS land...\nHappy Coding");

// Question 4
alert("Welcome to JS land...");
alert("Happy Coding");

// Question 5
console.log("Hello... I can run JS through my web browser's console");

// Chapter 2 ***************************************

// Question 1
var username;
// Question 2
var myName = "M.Shaheer khan";
// Question 3
var message;
message = "Hello World";
alert(message);
// Question 4
var studentName = "John Doe";
var studentDOB = 15;
var courseName = "Cetified Mobile Application Development";
alert(studentName);
alert(studentDOB + " years old");
alert(courseName);

// Question 5
var food = "PIZZA \nPIZZ\nPIZ\nPI\nP";
alert(food);
// Question 6
var email;
email = "m.shaheerkhan199@gmail.com";
alert("My email address is " + email);


// Question 7
var book = "A smarter way to learn JavaScript";
alert("I am trying to learn from the book " + book);

// Question 8
document.write("Yah! I can write HTML content through JavaScript");


// Question 9
var design = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(design);

// Chapter 3 *******************************************
// Question 1
var age;
age = 22;
alert("I am " + age + " years old.");

// Question 2
var noOfVisits = 14;
alert("You have visited this site " + noOfVisits + " times.");

// Question 3
var birthYear = 1998;
document.write("My birth year is " + birthYear + "<br/>");
document.write("Data type of my declared variable is number");

// Question 4
var visitorName = "John Doe";
var productTitle = "T-shirt(s)";
var quantity = 5;
var message = "<b>" + visitorName + "</b>" + " ordered " + " <b>" + quantity + " " + productTitle + "</b>" + " on XYZ Clothing store.";
document.write("<br/>" + message);

// Chapter 4 *******************************************
// Question 1
var variable1, variable2, variable3;

// Question 2
var name, age, dateOfBirth, salary, address; //Legal variables
var .alert, 2things, my--name, product cost, m / yData; //Illegal variables   

// Question 3
var a = "<h1>Rules for naming JS variables</h1>";
var b = "Variable names can only contain , numbers, $ and _ . For example : $my_1stVariable";
var c = "Variables must begin with a letter, $ or _. For example $name, _name or name";
var d = "Variable names are case sensitive";
var e = " Variable names should not be JS Keywords";
document.write(a + "<br>");
document.write(b + "<br>");
document.write(c + "<br>");
document.write(d + "<br>");
document.write(e + "<br>");

// Chapter 5 *******************************************
// Question 1
var num1 = (+prompt("Enter first operand"));
var num2 = (+prompt("Enter second operand"));
var ans = num1 + num2;
document.write("Sum of " + num1 + " and " + num2 + " is " + ans);


// Question 2
var num1 = (+prompt("Enter first operand"));
var num2 = (+prompt("Enter second operand"));
document.write("subraction of " + num1 + " and " + num2 + " is " + (num1 - num2) + "<br>");
document.write("Multiplication of " + num1 + " and " + num2 + " is " + num1 * num2 + "<br>");
document.write("Division of " + num1 + " and " + num2 + " is " + num1 / num2 + "<br>");
document.write("Modulus of " + num1 + " and " + num2 + " is " + num1 % num2 + "<br>");



// Question 3
var num;
document.write("Value after variable declaration is:" + num + "<br>");
num = 5;
document.write("Initial value:" + num + "<br>");
num++;
document.write("Value after increment is :" + num + "<br>");
num += 7;
document.write("Value after addition is :" + num + "<br>");
num--;
document.write("Value after decrement is :" + num + "<br>");
var remainder = num % 3;
document.write("The remainder is :" + remainder + "<br>");



// Question 4
var ticketPrice = 600;
var noOfTickets = 5;
var totalCost = ticketPrice * noOfTickets;
var message = "Total cost to buy " + noOfTickets + " tickets to a movie is " + totalCost + " PKR";
document.write(message);

// Question 5
var table = 5;
for (var i = 1; i <= 10; i++) {
    document.write(table + " x " + i + " = " + table * i + "<br>");
}

// Question 6
var tempInCel = 25;
var tempInFarConvert = (tempInCel * 9 / 5) + 32;
document.write(tempInCel + " oC is " + tempInFarConvert + " oF " + "<br>");

var tempInFar = 70;
var tempInCelConvert = (tempInFar - 32) * 5 / 9;
document.write(tempInFar + " oF is " + tempInCelConvert + " oC ");

// Question 7
var priceOfItem1 = 650;
var priceOfItem2 = 100;
var orderedQuantityOfItem1 = 3;
var orderedQuantityOfItem2 = 7;
var shippingCharges = 100;
var totalCost = (priceOfItem1 * orderedQuantityOfItem1) + (priceOfItem2 * orderedQuantityOfItem2) + shippingCharges;
document.write("Price of item 1 is " + priceOfItem1 + "<br>");
document.write("Quantity of item 1 is " + orderedQuantityOfItem1 + "<br>");
document.write("Price of item 2 is " + priceOfItem2 + "<br>");
document.write("Quantity of item 2 is " + orderedQuantityOfItem2 + "<br>");
document.write("<br>");
document.write("Total cost of your order is " + totalCost + "<br>");


// Question 8
var totalMarks = 980;
var obtainMarks = 804;
var per = (obtainMarks / totalMarks) * 100;
document.write("Total marks:" + totalMarks + "<br>");
document.write("Marks Obtained:" + obtainMarks + "<br>");
document.write("Percentage:" + per + "%<br>");

// Question 9
var dollar = 10;
var saudiRiyals = 25;
var totalInPKR = (dollar * 104.80) + (saudiRiyals * 28);
document.write("<h1>Currency in PKR</h1><br>");
document.write("Total Currecny in PKR:", totalInPKR);


// Question 10
var number = 2;
number = ((number + 5) * 10) / 2;
document.write("After Arithmetic operations the value is " + number);

// Question 11
var currentYear = 2020;
var birthYear = 1992;
var age = currentYear - birthYear;
document.write("Current Year:" + currentYear + "<br>");
document.write("Birth Year:" + birthYear + "<br>");
document.write("Your age is :" + age + "<br>");

// Question 12
var radius = 20;
var circum = 2 * 3.142 * radius;
var area = 3.14 * radius * radius;
document.write("Raduis of a circle is :" + radius + "<br>");
document.write("The circumference is :" + circum + "<br>");
document.write("The area is :" + area + "<br>");

// Question 13
var favSnack = "Choclate Chip";
var currentAge = 15;
var maxAge = 65;
var perDay = 3;
var total = (maxAge - currentAge) * perDay;
document.write("<h1>The Lifetime Supply Calculator</h1><br>");
document.write("Favourite Snack :" + favSnack + "<br>");
document.write("Current Age :" + currentAge + "<br>");
document.write("Estimated Maximun age :" + maxAge + "<br>");
document.write("Amount of snacks per day :" + perDay + "<br>");
document.write("You will need " + total + " " + favSnack + " to last you until the ripe old age of " + maxAge + "<br>");

// Chapters 6-9 ******************************************
// Question 1
var a = 10;
document.write("Result: <br>")
document.write("The value of a is :" + a + "<br>");
document.write("--------------------------<br>")
document.write("The value of ++a is :" + ++a + "<br>");
document.write("Now the value of a is :" + a + "<br>");
document.write("--------------------------<br>")
document.write("The value of a++ is :" + a++ + "<br>");
document.write("Now the value of a is :" + a + "<br>");
document.write("--------------------------<br>")
document.write("The value of --a is :" + --a + "<br>");
document.write("Now the value of a is :" + a + "<br>");
document.write("--------------------------<br>")
document.write("The value of a-- is :" + a-- + "<br>");
document.write("Now the value of a is :" + a + "<br>");


// Question 2
var a = 2;
var b = 1;
var result = --a - --b + ++b + b--;
document.write("a is :" + a + "<br>");
document.write("b is :" + b + "<br>");
document.write("Result is :" + result);

// Question 3
var name = prompt("Enter your name");
alert("Hello! " + name + " It's coding time");

// Question 4


// Question 5
var tableNumber = (+prompt("Enter a number to print the table"));
if (tableNumber != "") {
    for (var i = 1; i <= 10; i++) {
        document.write(tableNumber + " x " + i + " = " + tableNumber * i + "<br>");
    }
}
else {
    tableNumber = 5;
    for (var i = 1; i <= 10; i++) {
        document.write(tableNumber + " x " + i + " = " + tableNumber * i + "<br>");
    }

}



// Question 6
var subj1Name = prompt("Enter the name of subject 1:");
var subj2Name = prompt("Enter the name of subject 2:");
var subj3Name = prompt("Enter the name of subject 3:");
var totalMarksOfEachSubject = 100;
var subj1Marks = (+prompt("Enter the marks of subject 1:"));
var subj2Marks = (+prompt("Enter the marks of subject 2:"));
var subj3Marks = (+prompt("Enter the marks of subject 3:"));
var totalObtainMarks = subj1Marks + subj2Marks + subj3Marks;
var percentage = (totalObtainMarks / (totalMarksOfEachSubject * 3)) * 100;
document.write("<table border='1'>");
document.write("<tr>");
document.write("<th> Subject </th>");
document.write("<th> Total Marks </th>");
document.write("<th> Obtained Marks </th>");
document.write("<th> Percentage </th>");
document.write("</tr>");
document.write("<tr>");
document.write("<td> " + subj1Name + " </td>");
document.write("<td> " + totalMarksOfEachSubject + " </td>");
document.write("<td>" + subj1Marks + "</td>");
document.write("<td> " + subj1Marks + "%" + " </td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td> " + subj2Name + " </td>");
document.write("<td> " + totalMarksOfEachSubject + " </td>");
document.write("<td>" + subj2Marks + "</td>");
document.write("<td> " + subj2Marks + "%" + " </td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td> " + subj3Name + " </td>");
document.write("<td> " + totalMarksOfEachSubject + " </td>");
document.write("<td>" + subj3Marks + "</td>");
document.write("<td> " + subj3Marks + "%" + " </td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td> </td>");
document.write("<td> " + (totalMarksOfEachSubject * 3) + " </td>");
document.write("<td>" + totalObtainMarks + "</td>");
document.write("<td> " + percentage + "%" + " </td>");
document.write("</tr>");
document.write("</table>");

// Chapters 9-11 ********************************************
// Question 1
var city = prompt("Enter your city:");
if (city === "Karachi") {
    document.write("Welcome to city of lights");
}


// Question 2
var gender = prompt("Enter your gender:");
if (gender === "Male") {
    document.write("Good Morning Sir");
}
else {
    document.write("Good Morning Ma'am");
}

// Question 3
var signalColor = prompt("Enter the color of the signal");
if (signalColor === "Red") {
    document.write("Must Stop");
}
else if (signalColor === "Yellow") {
    document.write("Ready to move");
}
else {
    document.write("Move Now");
}


// Question 4
var fuel = (+prompt("Enter the fuel remaining"));
if (fuel < 0.25) {
    document.write("Please refill the fuel in your car");
}

// Question 5


// Question 6

var subj1Marks = (+prompt("Enter the marks of subject 1:"));
var subj2Marks = (+prompt("Enter the marks of subject 2:"));
var subj3Marks = (+prompt("Enter the marks of subject 3:"));
var totalMarks = (+prompt("Enter total marks"));
var totalObtainMarks = subj1Marks + subj2Marks + subj3Marks;
var percentage = (totalObtainMarks / totalMarks) * 100;
if (percentage >= 80) {
    document.write("Grade is : A-One" + "<br>");
    document.write("Remarks is : Excellent");
}
else if (percentage >= 70) {
    document.write("Grade is : A" + "<br>");
    document.write("Remarks is : Good");
}
else if (percentage >= 60) {
    document.write("Grade is : B" + "<br>");
    document.write("Remarks is : You need to imporve");
}
else if (percentage < 60) {
    document.write("Grade is : Fail" + "<br>");
    document.write("Remarks is : Sorry");
}
else {
    document.write("Invalid input");
}


// Question 7
var secretNum = Math.floor((Math.random() * 10) + 1);
console.log(secretNum);
var userGuess = (+prompt("Guess the secret number"));
if (userGuess === secretNum) {
    document.write("Bingo! Correct answer");
}
else if ((userGuess + 1) === secretNum) {
    document.write("Close enough to the correct answer");
}
else {
    document.write("Your guess is wrong! bad luck try next time");
}


// Question 8
var userNumber = (+prompt("Enter a number"));
if (userNumber % 3 === 0) {
    document.write(userNumber + " is divisible by 3");
}

// Question 9
var userNumber = (+prompt("Enter a number"));
if (userNumber % 2 === 0) {
    document.write(userNumber + " is even number ");
}
else {
    document.write(userNumber + " is odd number ");
}


// Question 10
var temp = (+prompt("Enter the temperature"));
if (temp > 40) {
    document.write("It is too hot outside");
}
else if (temp > 30) {
    document.write("The weather today is Normal");
}
else if (temp > 20) {
    document.write("Today's weather is cool");
}
else {
    document.write("OMG! Today’s weather is so Cool.");
}


// Question 11
var operand1 = (+prompt("Enter first operand "));
var operator = prompt("Enter Operation ");
var operand2 = (+prompt("Enter second operand "));
if (operator == "+") {
    document.write(operand1 + " " + operator + " " + operand2 + " is " + (operand1 + operand2));
}
else if (operator == "-") {
    document.write(operand1 + " " + operator + " " + operand2 + " is " + (operand1 - operand2));
}
else if (operator == "*") {
    document.write(operand1 + " " + operator + " " + operand2 + " is " + (operand1 * perand2));
}
else if (operator == "/") {
    document.write(operand1 + " " + operator + " " + operand2 + " is " + (operand1 / operand2));
}
else if (operator == "%") {
    document.write(operand1 + " " + operator + " " + operand2 + " is " + (operand1 % operand2));
}
else {
    document.write("invalid input");
}

// Chapters 12-13 ****************************************
// Question 1
var character = prompt("Enter a character");
// document.write(character);
if (isNaN(character)) {
    if (character === character.toUpperCase()) {
        document.write("Given input is an upper case character");
    }
    else {
        document.write("Given input is an lower case character");
    }
    // alert(character.toUpperCase());
}
else {
    document.write("The given input is a number")
}




// Question 2
var num1 = (+prompt("Enter first number"));
var num2 = (+prompt("Enter second number"));
if (num1 === num2) {
    document.write("Both numbers are equal");
}
if (num1 < num2) {
    document.write(num2 + " is larger than " + num1);
}

// Question 3
var num = (+prompt("Enter a number"));
if (num < 0) {
    document.write("Number is negative");
}
else if (num > 0) {
    document.write("Number is Positive");
}
else {
    document.write("Number is zero");
}

// Question 4
var alphabet = prompt("Enter a single character");
if (alphabet === "a" || alphabet === "e" || alphabet === "i" || alphabet === "o" || alphabet === "u") {
    document.write(true);
}
else {
    document.write(false);
}


// Question 5
var rightPassword = "Grass2Lear";
var userInput = prompt("Enter the password");
if (userInput == "") {
    document.write("Please enter your password");
}
else if (rightPassword == userInput) {
    document.write("Correct! The password you entered matches the original password");
}
else {
    document.write("Incorrect Password");
}

// Question 6
var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
}
else {
    greeting = "Good evening";
}


// Question 7
var time = (+prompt("Enter time in 24 hour format"));
if (time >= 0000 && time < 1200) {
    document.write("Good Morning");
}
else if (time >= 1200 && time < 1700) {
    document.write("Good Afternoon");
}
else if (time >= 1700 && time < 2100) {
    document.write("Good Evening");
}
else if (time >= 2100 && time <= 2359) {
    document.write("Good Night");
}
else {
    document.write("Invalid Input");
}

// Chapters 14-16 **************************************
// Question 1   
var studentNames = [];

// Question 2
var studentNames = Array();

// Question 3
var fruits = Array("Apple", "Mango", "Banana", "Strawberry");

// Question 4
var luckyNumbers = Array(7, 6, 9, 2, 15);

// Question 5
var flags = Array(true, false, false, true, false);

// Question 6
var mixedArray = Array(1, 2, "Ali", true, 35, "Mango", 2.11, false);

// Question 7
var qualifications = Array("SSC", "HSC", "BSC", "BS", "BCOM", "MS", "M. Phil.", "PhD");
document.write("Qualifications:<br>");
for (var i = 0; i < qualifications.length; i++) {
    document.write((i + 1) + ") " + qualifications[i] + "<br>");
}

// Question 8
var names = Array("Michael", "John", "Toni");
var scores = Array(320, 230, 480);
var totalMarks = 500;
for (var i = 0; i < names.length; i++) {
    document.write("Score of " + names[i] + " is " + scores[i] + ". Percentage:" + (scores[i] / totalMarks * 100) + "%<br>");
}

// Question 9
//part a
var colorNames = Array("Red", "Green", "Blue");
alert("The color in the array are: " + colorNames);
var userChoice = prompt("Enter the color to insert to the beginning of the array");
colorNames.unshift(userChoice);
alert("Updated array is: " + colorNames);

//part b
var userChoice = prompt("Enter the color to insert to the end of the array");
colorNames.push(userChoice);
alert("Updated array is: " + colorNames);

//part c
colorNames.unshift("purple");
colorNames.unshift("yellow");
alert("Updated array is: " + colorNames);

//part d
colorNames.shift();
alert("Updated array is: " + colorNames);

//part e    
colorNames.pop();
alert("Updated array is: " + colorNames);

//part f
var userInput = prompt("Enter the color you want to add");
var index = (+prompt("Enter the index"));
colorNames.splice(index, 0, userInput);

//part g
var index = (+prompt("At which index you want to delete colors?"));
var noOfColors = (+prompt("How many colors you want to delete?"));
colorNames.splice(index, noOfColors);


// Question 10
var studentScores = Array(320, 230, 480, 120);
document.write("Scores of Student: " + studentScores + "<br>");
var sortedScores = studentScores.sort();
document.write("Ordered Scores of Student: " + sortedScores);

// Question 11
var cities = Array("Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar");
var selectedCities = cities.slice(2, 5);
document.write("Selected cities: " + selectedCities);

// Question 12
var arr = ["This", "is", "my", "cat"];
var sentence = arr.join(" ");
document.write(sentence);

// Question 13
var devices = [];
devices.push("keyboard");
devices.push("mouse");
devices.push("printer");
devices.push("monitor");
document.write(devices + "<br>");
document.write("Out:" + devices.shift() + "<br>");
document.write("Out:" + devices.shift() + "<br>");
document.write("Out:" + devices.shift() + "<br>");
document.write("Out:" + devices.shift());

// Question 14
var devices = [];
devices.push("keyboard");
devices.push("mouse");
devices.push("printer");
devices.push("monitor");
document.write("Out:" + devices.pop() + "<br>");
document.write("Out:" + devices.pop() + "<br>");
document.write("Out:" + devices.pop() + "<br>");
document.write("Out:" + devices.pop());



// Question 15
var phoneBrands = Array("Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier");
document.write("<select>");
for (var i = 0; i < phoneBrands.length; i++) {
    document.write("<option>" + phoneBrands[i] + "</option>");
}
document.write("</select>");

// Chapters 17-20 **************************************
// Question 1   
var mutliDimArray = [[], [], [], []];

// Question 2
var numberArray = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
]

// Question 3
for (var i = 1; i <= 10; i++) {
    document.write(i + "<br>");
}

// Question 4
var table = (+prompt("Enter a number to show its multiplication table"));
var lengthOfTable = (+prompt("Enter length of table"));
for (var i = 1; i <= lengthOfTable; i++) {
    document.write(table + " x " + i + " = " + (table * i) + "<br>");
}

// Question 5
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for (var i = 0; i < fruits.length; i++) {
    document.write("Element at index " + i + " is " + fruits[i] + "<br>");
}

// Question 6
document.write("Counting<br>");
for (var i = 1; i <= 15; i++) {
    document.write(i + ", ");
}
document.write("<br>Reverse Counting<br>");
for (var i = 10; i >= 1; i--) {
    document.write(i + ", ");
}
document.write("<br>Even<br>");
for (var i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
        document.write(i + ", ");
    }
}
document.write("<br>Odd<br>");
for (var i = 0; i <= 20; i++) {
    if (i % 2 != 0) {
        document.write(i + ", ");
    }
}
document.write("<br>Series<br>");
for (var i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        document.write(i + "k, ");
    }
}

// Question 7
var items = ["cake", "apple pie", "cookie", "chips", "patties"];
var searchItem = prompt("Welcome to ABC bakery, What do you want to order sir/ma'am?");
var notFound = false;
for (var i = 0; i < items.length; i++) {
    if (searchItem === items[i]) {
        alert(searchItem + " is available at index " + i + " in our bakery");
        break;
    }
}


// Question 8
var arr = [24, 53, 78, 91, 12];
var max = arr[0];
for (var i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
document.write("Full Array: " + arr + "<br>");
document.write("Max Number in array is: " + max);


// Question 9
var arr = [24, 53, 78, 91, 12];
var min = arr[0];
for (var i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i];
    }
}
document.write("Full Array: " + arr + "<br>");
document.write("Minimum Number in array is: " + min);


// Question 10
for (i = 1; i <= 20; i++) {
    document.write((5 * i) + ", ");
}

// chapters 21-25
// Task 1
var firstName = prompt("Enter your first name");
var lastName = prompt("Enter your last name");
var fullName = firstName+" "+lastName;
alert("Hello "+ fullName + " Good to see you.")
// Task 2
var favPhone = prompt("Enter your favourite Phone name and model");
var lengthOfStr = favPhone.length;
document.write("My favourite phone is : " + favPhone + "<br>");
document.write("Length of string: "+ lengthOfStr);
// Task 3
var country = "Pakistani";
var indexOfn = country.indexOf('n');
document.write("string: "+ country + "<br>");
document.write("index of \'n\' is: "+indexOfn);
// Task 4
var str = "Hello World";
var indexOfl = str.lastIndexOf('l');
document.write("String: "+ str + "<br>");
document.write("Last index of \'l\' is: "+ indexOfl);
// Task 5
var country = "Pakistani";
var char = country.charAt(3);
document.write("String: "+ country + "<br>");
document.write("Character at index 3 is: "+ char); 
// Task 6
var firstName = prompt("Enter your first name");
var lastName = prompt("Enter your last name");
var fullName = firstName.concat(" ",lastName);
alert("Hello "+ fullName + " Good to see you.")
// Task 7
var city = "Hyderabad";
var newCity = city.replace("Hyder", "Islam");
document.write("City: "+city+"<br>");
document.write("After Replacement: "+newCity)
// Task 8
var message = "Ali and Sami are best friends. They play cricket and football together.";
var newmsg = message.replace(/and/g,"&");
console.log(newmsg);
// Task 9
var num = "472";
document.write("Value: "+num+"<br>");
document.write("Type: "+typeof(num)+"<br>");
num = Number(num);
document.write("Value: "+num+"<br>");
document.write("Type: "+typeof(num)+"<br>");
// Task 10
var userInput  = prompt("Enter some lower case sentence");
document.write("User Input: "+userInput+"<br>");
userInput = userInput.toUpperCase();
document.write("Upper Case: "+userInput);
// Task 11
var userInput  = prompt("Enter sentence in any case");
document.write("User Input: "+userInput+"<br>");
userInput = userInput.slice(0,1).toUpperCase() + userInput.slice(1, userInput.length);
document.write("Title Case: "+userInput);
// Task 12
var num = 35.36;
result = num.toString();
result = result.replace(".","");
document.write("Number: ", num+"<br>");
document.write("Result: "+result);
// Task 13
var userName = prompt("Enter your username");
for(var i=0; i<userName.length; i++){
    if(userName[i] == "@" || userName[i] == "." || userName[i] == ',' || userName[i] == "!"){
        document.write("Please enter a valid user name");
        break;
    }
}
// Task 14
items = ["cake", "apple pie", "cookie", "chips", "patties"];
var searchItem = prompt("Enter item name to search").toLowerCase(); 
var itemFound = false;
for(var i=0; i<items.length; i++){
    if(searchItem === items[i]){
        document.write(searchItem+" is available at index "+i+" in our bakery");
        itemFound = true;
        break;
    }
}
if(!itemFound)
{
    document.write("Sorry! This item is not available in our bakery");
}
// Task 15
var password = prompt("Enter your password");
if(password.length < 6){
    document.write("password must be at least 6 characters long <br>");
}
if(!isNaN(password[0]*2))
{
    document.write("password should not start with a number <br>");
}
if(!(password.match(/[A-Z]+/) || (password.match(/[A-Z]+/)))){
    document.write("Password should contain Alphabets and Numbers <br>");
}
// Task 16
var university = "University of Karachi";
var list = university.split("");
for(var i=0; i<university.length; i++){
    document.write(list[i] + "<br>")
}
// Task 17
var userInput = prompt("Enter any string");
var lastChar = userInput.charAt(userInput.length-1);
document.write("User Input: "+userInput+"<br>");
document.write("Last character of input: "+lastChar);
// Task 18
var text = "The quick brown fox jumps over the lazy dog".toLowerCase();
count = 0;
listOfWords = text.split(" ");
for(var i=0; i<listOfWords.length; i++){
    if(listOfWords[i] === "the"){
        count++;
    }
}
document.write("Text: "+ text + "<br>");
document.write("There are "+count+ " occurence(s) of word 'the'");

// Chapter 26-30 
// Task 1
var num = (+prompt("Enter any floating point positive number"));
var roundNum = Math.round(num);
var floorNum = Math.floor(num);
var ceilNum = Math.ceil(num);
document.write("number: "+num+"<br>");
document.writeln("round off value: "+ roundNum+"<br>");
document.writeln("floor value: "+ floorNum+"<br>");
document.writeln("ceil value: "+ ceilNum+"<br>");
// Task 2
var num = (+prompt("Enter any floating point negative number"));
var roundNum = Math.round(num);
var floorNum = Math.floor(num);
var ceilNum = Math.ceil(num);
document.write("number: "+num+"<br>");
document.writeln("round off value: "+ roundNum+"<br>");
document.writeln("floor value: "+ floorNum+"<br>");
document.writeln("ceil value: "+ ceilNum+"<br>");
// Task 3
var num = -4;
var absOfNum = Math.abs(num);
document.write("The absolute value of "+num+" is "+absOfNum);
// Task 4
var random = Math.ceil(Math.random() * 6);
document.write("Random dice value is: "+ random);
// Task 5
var random = Math.ceil(Math.random() * 2);
if(random === 2){
    document.write("Radom Coin value: Heads");
}else{
    document.write("Radom Coin value: Tails ");
}
// Task 6
var randomNum = Math.ceil(Math.random() * 100);
document.writeln("Random Number between 1 and 100: "+ randomNum);
// Task 7
var weight = prompt("Enter your weight in kilograms");
weight = parseInt(weight);
document.writeln("The weight of user is "+weight+" Kilograms");
// Task 8
var secretNum = Math.ceil(Math.random() * 10);
var userGuess = (+prompt("Input a number between 1 and 10: "));
if(userGuess === secretNum){
    document.writeln("Congratulations! you win");
}else{
    document.writeln("Try again");
}

// Chapter 31-34
// Task 1
var currentDateAndTime = new Date();
document.writeln(currentDateAndTime);
// Task 2
var months = ["January","Feburary", "March", "April", "May", "June", "July", "August", "September", "November", "December"];
var currentDateAndTime = new Date();
var currentMonth = currentDateAndTime.getMonth();
document.write("Current Month is: "+ months[currentMonth]);
// Task 3
var days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thuraday", "Friday", "Saturday"];
var currentDateAndTime = new Date();
var currentDay = currentDateAndTime.getDay();
document.write("Today is: "+ days[currentDay]);
// Task 4
var days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thuraday", "Friday", "Saturday"];
var currentDateAndTime = new Date();
var currentDay = currentDateAndTime.getDay();
if(days[currentDay] === "Saturday" || days[currentDay] === "Sunday" ){
    document.write("It's fun day");
}else{
    document.write("It's normal day");
}
// Task 5
var currentDateAndTime = new Date();
var currentDate = currentDateAndTime.getDate();
if(currentDate < 16){
    document.write("First fifteen days of the month");
}else{
    document.write("Last days of the month");
}
// Task 6
var currentDateAndTime = new Date();
var oldDate = new Date("Jan 1, 1970");
var diffInMilliSec = currentDateAndTime.getTime()-oldDate.getTime();
var elapsedMins = diffInMilliSec/(1000*60*60);
document.write("Current Date: "+currentDateAndTime+"<br>");
document.write("Elapsed milli seconds since Jan 1, 1970: "+diffInMilliSec+"<br>");
document.write("Elapsed minutes since Jan 1, 1970: "+elapsedMins);
// Task 7
var currentDateAndTime = new Date();
var hour = currentDateAndTime.getHours();
if(hour > 12){
    alert("It's PM");
}else{
    alert("It's AM");
}
// Task 8
var laterDate = new Date("Dec 31, 2020");
document.write("Last day of this year: "+ laterDate);
// Task 9
var firstRamadan = new Date("June 18, 2015");
var currentDateAndTime = new Date();
var diff =currentDateAndTime.getTime()-firstRamadan.getTime();
var days = Math.floor(diff/(1000*60*60*24));
document.write(days+" days have passed since 1st Ramadan, 2015");
// Task 10
var beginning = new Date("Jan 1, 2015");
var refrenceDate = new Date("Dec 5, 2015");
var elapsedSec = (refrenceDate.getTime()-beginning.getTime())/(1000*60);
document.write("on reference date: "+refrenceDate+"<br>");
document.write(elapsedSec+" seconds has passed since beginning of 2015");
// Task 11
var currentDateAndTime = new Date();
document.write("Current date: "+ currentDateAndTime+"<br>");
currentDateAndTime.setHours(currentDateAndTime.getHours()-1);
document.write("One hour ago it was: "+ currentDateAndTime);
// Task 12
var currentDateAndTime = new Date();
document.write("Current date: "+ currentDateAndTime+"<br>");
currentDateAndTime.setFullYear((currentDateAndTime.getFullYear()-100));
document.write("100 years back it was: "+ currentDateAndTime);
// Task 13
var userAge = (+prompt("Enter your age"));
var currentDateAndTime = new Date();
var birthYear = currentDateAndTime.getFullYear() - userAge;
document.write("Your age is: "+ userAge+"<br>");
document.write("Your birth year is: "+birthYear);
// Task 14
var customerName = "Kashif";
var currentMonth  = "Feburary";
var units = 410;
var chargesPerUnit = 16;
var latePaySurcharge = 350;
var netAmountWithinDueDate = units*chargesPerUnit;
var grossAmountAfterDueDate = netAmountWithinDueDate+latePaySurcharge;
document.write("<h1>K-Electric Bill</h1><br>");
document.write("Customer Name: "+customerName+"<br>");
document.write("Month: "+currentMonth+"<br>");
document.write("Number of Units: "+units+"<br>");
document.write("Charges per unit: "+chargesPerUnit+"<br><br>");
document.write("Net Amount Payable (within Due Date): "+netAmountWithinDueDate+"<br>");
document.write("Late Payment Surcharge: "+latePaySurcharge+"<br>");
document.write("Gross Amount Payable (after Due Date): "+grossAmountAfterDueDate+"<br>");

// Chapter 35-38
// Task 1
function showCurrentDateAndTime(){
    alert(new Date());
}
showCurrentDateAndTime();
// Task 2
function greetUser(firstName, lastName){
    alert("Hello! "+ firstName + " " + lastName);
}
greetUser("M.Shaheer","khan");
// Task 3
function addNums(){
    var num1 = (+prompt("Enter first Number"));
    var num2 = (+prompt("Enter second Number"));
    return num1+num2;
}
document.write(addNums());
// Task 4
function calculator(num1, num2, operator){
    if(operator == "+"){
        document.write(num1+" "+operator+" "+num2+" = "+(num1+num2));
    }else if(operator == "-"){
        document.write(num1+" "+operator+" "+num2+" = "+(num1-num2));
    }else if(operator == "*"){
        document.write(num1+" "+operator+" "+num2+" = "+(num1*num2));
    }else if (operator == "/"){
        document.write(num1+" "+operator+" "+num2+" = "+(num1/num2));
    }else{
        document.writeln("Invalid Input");
    }
}
calculator(4,2,'*');
// Task 5
function square(num){
    return num*num;
}
document.write(square(3));
// Task 6
function factorial(num){
    var result = 1;
    for(var i=num; i>=1; i--){
        result = result*i;
    }
    return result;
}
document.write(factorial(5));
// Task 7
function printCounting(){
    var start = (+prompt("Enter start Number"));
    var end = (+prompt("Enter end Number"));
    for(var i=start; i<=end; i++){
        document.write(i + "<br>");
    }
}
printCounting();
// Task 8
function calculateHypotenuse(base, perp){
    function calculateSquare(num){
        return num*num;
    }
    var hyp = calculateSquare(base) * calculateSquare(perp);
    return hyp;
}
document.write("Hypotenuse of triangle is: "+ calculateHypotenuse(2,3));
// Task 9
function areaOfRectangle(width, height){
    var area = width * height;
    document.write("Area of the rectangle is: "+ area+"<br>");
}
areaOfRectangle(2,4);
var w = 5;
var h = 10;
areaOfRectangle(w,h);
// Task 10
function checkPalandrome(string){
    reverseOfString = "";
    for(var i=string.length-1; i>=0; i--){
        reverseOfString = reverseOfString + string[i];
    } 
    if(reverseOfString === string){
        document.write(string + " is palandrome");
    }else{
        document.write(string+ " is not palandrome");
    }
}
checkPalandrome("1212");
// Task 11
function toSenetenceCase(str){
    var wordList = str.split(" ");
    for(var i=0; i<wordList.length; i++){
        wordList[i] = wordList[i].charAt(0).toUpperCase()+wordList[i].slice(1,);
    }
    return wordList.join(" ");
}
var sampleString = "the quick brown fox";
document.write(toSenetenceCase(sampleString));
// Task 12
function findLongestWord(str){
    var wordList = str.split(" ");
    var maxLengthWord = wordList[0];
    for(var i=1; i<wordList.length; i++){
        if(wordList[i].length > maxLengthWord.length){
            maxLengthWord = wordList[i];
        }
    }
    return maxLengthWord;
}
document.write(findLongestWord("Web Development Tutorial"));
// Task 13
function countOccurence(str, letter){
    var count = 0;
    for(var i=0; i<str.length; i++){
        // document.write(str[i]);
        if(str[i] === letter){
            count++;
        }
    }
    return count;
}
document.write(countOccurence("JSResourceS.com", "o"));
// Task 14
function calcCircumference(radius){
    var circum = 2*3.14*radius;
    return circum;
}
function calcArea(radius){
    var area = 3.14*radius*radius;
    return area;
}
document.write("Circumference is: "+calcCircumference(6)+"<br>");
document.write("Area is: "+calcArea(2.5));

// Chapter 38-42
// Question 1
    function power(base, exp){
        var result = 1;
        for(var i=1; i<=exp; i++){
            result = result*base; 
        }
        return result;
    }
    var pow = power(5,3);
    document.write("result is: ", pow);

// Question 2
    function is_leap_year(year){
        if((year % 4 == 0) && (year % 100 != 0)){
            document.write(year+" is leap year.");
        }else if(year % 400 == 0){
            document.write(year+" is leap year.");
        }else{
            document.write(year+" is not leap year.");
        }
    }
    var year = (+prompt("Enter year to check its leap year or not"));
    is_leap_year(year);

// Question 3
    function helper_function(a,b,c){
        return ((a+b+c)/2)
    }
    function calculate_area_of_triangle(a,b,c){
        var S = helper_function(a,b,c);
        var area = S*((S-a)*(S-b)*(S-c));
        return area;
    }
    var area = calculate_area_of_triangle(5,6,4);
    document.write("Calculation result of area: "+ area);
    
// Question 4
    function calc_per(sub1, sub2, sub3){
        // Suppose each subject have 100 marks total so total marks of 3 subjects is 300
        var total_marks = 300;
        var total_obtain = sub1+sub2+sub3;
        var percentage = ((total_obtain/total_marks)*100).toFixed(2);
        return percentage+"%";
    }
    function calc_avg(sub1, sub2, sub3){
        var average = ((sub1+sub2+sub3)/3).toFixed(2);
        return average;
    }
    function mainFunction(subj1, subj2, subj3){
        var per = calc_per(subj1, subj2, subj3);
        var avg = calc_avg(subj1, subj2, subj3);
        document.write("Average of your marks is: "+avg+"<br>");
        document.write("Your percentage is: "+per);
    }
    mainFunction(90,40,60);

// Question 5
    var name = "Shaheer";
    function find_index_of_char(string, char){
        for(var i=0; i<string.length; i++){
            if(string[i] === char){
                return i;
                break;
            }     
        }
    }
    var index =  find_index_of_char(name, "a");
    document.write(index);

// Question 6
    var sent = "i have an apple to eat";
    function delete_all_vowels(sentence){
        sentence = sentence.replace(/[aeiou]/g, '');
        return sentence
    }
    var updated_sentence = delete_all_vowels(sent);
    document.write("Original Sentence: "+sent+"<br>");
    document.write("After replacing Vowels: "+updated_sentence);

// Question 7
    function count_any_two_vowels(sentence){
        var count = 0;
        var vowels = ['a','e','i','o','u'];
        document.write("Occurence of two vowels are: ");
          for(var i=0; i<sentence.length;i++){
              if(vowels.includes(sentence[i]) && vowels.includes(sentence[i+1]))
              {
                  document.write(sentence[i]+sentence[i+1]+",");
                  count++;
              }
          }
          document.write("<br> Counts is: "+count);  
    }
    count_any_two_vowels("Pleases read this application and give me gratuity");

// Question 8
    function convert_into_meters(distance){
        var meters  = distance*1000;
        return meters;
    }
    function convert_into_feet(distance){
        var feet = distance*3280.84;
        return feet;
    }
    function convert_into_inches(distance){
        var inches = distance*39370.1;
        return inches;
    }
    function convert_into_centimeters(distance){
        var cent = distance*100000;
        return cent;
    }
    var distance = (+prompt("Enter distance in km.."))
    var meter = convert_into_meters(distance);
    var feet = convert_into_feet(distance);
    var inches = convert_into_inches(distance);
    var centimeters = convert_into_centimeters(distance);
    document.write(distance+" km = "+ meter +" meters <br>");
    document.write(distance+" km = "+ feet +" feet <br>");
    document.write(distance+" km = "+ inches +" inches <br>");
    document.write(distance+" km = "+ centimeters +" centimeters <br>");

// Question 9
    function calculate_overtime(hours){
        var per_hour_overtime = 12;
        var overtime_amount;
        if(hours > 40){
            overtime_amount = hours*per_hour_overtime;
        }
        return overtime_amount;
    } 
    var no_of_hours = (+prompt("Enter how many hours you worked"));
    document.write("Your overtime amount is: "+calculate_overtime(no_of_hours));

// Question 10
    var amount = (+prompt("Enter amount to withdraw"));
    var hundred= Math.floor(amount/100);
    var fifty = Math.floor((amount % 100) / 50) ;
    var ten =  Math.floor((((amount % 100) % 50) / 10));
    var remaining = Math.floor((((amount % 100) % 50) % 10));
    document.write("You will have "+ hundred +" hundred notes "+fifty +" fifty notes and "+ten+" ten notes <br>");
    document.write("Your remaining amount is: "+ remaining);

// Chapter 43-48
// Question 1
    <a href="Javascript:void(0)" onclick="alert('Your clicked on a link')">Click on me</a>

// Question 2
    <div>
        <a href="Javascript:void(0)" onclick="show_alert();"><img src="images/mobile.jpg" height="300" width="300" border="1"></a>
    </div>
    function show_alert(){
        alert("Thanks for purchasing a phone from us");
    }

// Question 3
    <table>
        <tr>
            <th>Index</th>
            <th>Name</th>
            <th>Age</th>
            <th></th>
        </tr>
        <tr>
            <td>0</td>
            <td>Jhone</td>
            <td>10</td>
            <td><input type="button" value="Delete" onclick="deleteRow(this)"></td>
        </tr>
        <tr>
            <td>1</td>
            <td>Doe</td>
            <td>9</td>
            <td><input type="button" value="Delete" onclick="deleteRow(this)""></td>
        </tr>
        <tr>
            <td>2</td>
            <td>Mark</td>
            <td>10</td>
            <td><input type="button" value="Delete" onclick="deleteRow(this)"></td>
        </tr>
        <tr>
            <td>3</td>
            <td>James</td>
            <td>8</td>
            <td><input type="button" value="Delete" onclick="deleteRow(this)"></td>
        </tr>
        <tr>
            <td>4</td>
            <td>Kashif</td>
            <td>15</td>
            <td><input type="button" value="Delete" onclick="deleteRow(this)"></td>
        </tr>
        <tr>
            <td>5</td>
            <td>Salman</td>
            <td>16</td>
            <td><input type="button" value="Delete" onclick="deleteRow(this)"></td>
        </tr>
        <tr>
            <td>6</td>
            <td>Ahmed</td>
            <td>19</td>
            <td><input type="button" value="Delete" onclick="deleteRow(this)"></td>
        </tr>
        <tr>
            <td>7</td>
            <td>Zeeshan</td>
            <td>22</td>
            <td><input type="button" value="Delete" onclick="deleteRow(this)"></td>
        </tr>
        <tr>
            <td>8</td>
            <td>Irfan</td>
            <td>12</td>
            <td><input type="button" value="Delete" onclick="deleteRow(this)"></td>
        </tr>
        <tr>
            <td>9</td>
            <td>Qasim</td>
            <td>28</td>
            <td><input type="button" value="Delete" onclick="deleteRow(this)"></td>
        </tr>
    </table>
    function deleteRow(btn) {
        var row = btn.parentNode.parentNode;
        console.log(row.parentNode);
        row.parentNode.removeChild(row);
      }

// Question 4
     <h1>Just mouse over on image and see the effect</h1>
     <img src="images/offbulb.jpg" id="image" height="300" width="300" onmouseout="change_image('offbulb.jpg');" onmouseover="change_image('onbulb.jpg');">
    function change_image(image_name){
        document.getElementById("image").src = "images/"+image_name;
    }

// Question 5
     <div>
         <button id="dec" onClick="decrement('textBox2');"><b>-</b></button>
         <input type="text" id="textBox2" value="1" readonly>
         <button id="inc" onClick="increment('textBox2');"><b>+</b></button>
     </div>
    function increment(textBoxId) {
        var textBox = document.getElementById(textBoxId);
        var textBoxValue = Number(textBox.value);
        textBoxValue++;
        textBox.value = textBoxValue;
    }
    function decrement(textBoxId) {
        var textBox = document.getElementById(textBoxId);
        var textBoxValue = Number(textBox.value);
        if (textBoxValue != 1) {
            textBoxValue--;
        }
        textBox.value = textBoxValue;
    }

// Chapter 49-52
// Question 1
    <form>
         <h1>Signup Form</h1>
         <label>Full name:</label>
         <input type="text" id="full_name">
         <br><br>
         <label>Enter password:</label>
         <input type="password" id="pass">
         <br><br>
         <label>Cnic</label>
         <input type="text" id="cnic">
         <br><br>
         <label>City</label>
         <select id="city">
             <option value="karachi">karachi</option>
             <option value="Lahore">Lahore</option>
             <option value="Islamabad">Islamabad</option>
             <option value="Hyderabad">Hyderabad</option>
         </select>
         <br><br>
         <input type="button" value="submit" onclick="display_data();">
         <input type="reset">
     </form>
        function display_data(){
            document.write("Your entered these details in form<br>");
            var full_name_field = document.getElementById("full_name");
            var pass_field = document.getElementById("pass");
            var cnic_field = document.getElementById("cnic");
            var city_field = document.getElementById("city");
            document.write(full_name_field.value +"<br>");
            document.write(pass_field.value +"<br>");
            document.write(cnic_field.value +"<br>");
            document.write(city_field.value +"<br>");
        }
    
// Question 2
     <p id="content_para">
         Lorem, ipsum...
     </p>
     <a href="Javascript:void(0)" onclick="see_more();">See more</a>
    function see_more(){
        var content = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit, rerum cupiditate. Nesciunt debitis hic temporibus quis molestias eius porro dicta? Magnam quos nesciunt est, aspernatur ullam libero placeat quia alias?";
        document.getElementById("content_para").innerHTML = content;
    }

// Question 3
     <style>
         .editBox{
             display: none;
         }
     </style>
     <form>
         <h1>Enter your data</h1>
         <label>Your name</label>
         <input type="text" id="name">
         <br><br>
         <label>Age</label>
         <input type="text" id="age">
         <br><br>
         <input type="button" value="Add data" onclick="add_data_into_table();">
     </form>
     <br>
     <table border="1" id="mytable">
         <tr>
             <th>Index</th>
             <th>Name</th>
             <th>Age</th>
             <th></th>
         </tr>
     </table>
     <div class="editBox" id="editBox">
         <h1>Edit your data</h1>
         <label>Your name</label>
         <input type="text" id="editBoxName">
         <br><br>
         <label>Age</label>
         <input type="text" id="editBoxAge">
         <br><br>
         <input type="button" value="Update" onclick="">
     </div>
function add_data_into_table(){
    var rows = document.getElementsByTagName("tr");
    var name_field = document.getElementById("name");
    var age_field = document.getElementById("age");
    var tr = document.createElement("tr");
    var td0 = document.createElement("td");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var index = document.createTextNode(rows.length-1);
    var name = document.createTextNode(name_field.value);
    var age = document.createTextNode(age_field.value);
    var deletebutton = document.createElement("button");
    var editbutton = document.createElement("button");
    var table = document.getElementById("mytable");
    deletebutton.innerHTML = "Delete";
    editbutton.innerHTML = "Edit";
    deletebutton.onclick = function(){table.removeChild(tr)};
    var editForm = document.getElementById("editBox");
    editbutton.onclick = function(){
        editForm.style.display = 'block';
        document.getElementById("editBoxName").value = name_field.value;
        document.getElementById("editBoxAge").value = age_field.value;
        // console.log(table.rows[1].cells[0]);
    };
    td0.appendChild(index);
    td1.appendChild(name);
    td2.appendChild(age);
    td3.appendChild(deletebutton);
    td3.appendChild(editbutton);
    tr.appendChild(td0);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    table.appendChild(tr);
    name_field.value = "";
    age_field.value = ""
}

// Chapter 52-57
//  Question 1
     <div class="container">
         <div class="modal" id="myModal">
             <div class="modal-dialog">
                 <div class="modal-content">
                     <div class="modal-body">
                         <img id="popUpImage" src="images/offbulb.jpg" height="350" width="450">
                     </div>
                 </div>
             </div>
         </div>
     </div>
    var images = ['1.jpg','2.jpg','3.jpg','4.png','5.jpg','6.jpg','7.png','8.jpg','9.jpg','10.jpg','11.jpg','12.jpg','13.jpg','14.png','15.jpg'];
    for (var i=0; i<=14; i++){
        var image = "<img data-toggle='modal' data-target='#myModal' onclick=showinModal('"+images[i]+"') src='images/others/"+ images[i] +"' height='200' width='200'>";
        document.write(image);
    }
    function showinModal(imageName){
        var image = document.getElementById("popUpImage");
        image.src = "images/others/"+imageName;
    }

//  Question 2
    <input type="button" value="Zoom in" onclick="zoomin_and_zoomout('+');">
    <input type="button" value="Zoom out" onclick="zoomin_and_zoomout('-');">
    <p id="para">This is my paragraph</p>
    var font_size = 10;
    function zoomin_and_zoomout(operator) {
        if (operator === "+") {
            var para = document.getElementById("para");
            font_size += 10;
            para.style.fontSize = font_size + "px";
        }
        if (operator === "-") {
            if (font_size > 20) {
                var para = document.getElementById("para");
                font_size -= 10;
                para.style.fontSize = font_size + "px";
            }
        }
    }

// Chapter 58-67
// Question 1
    // part i
        var my_content = document.getElementById("form-content");
    // part ii
        var my_content = document.getElementById("form-content");
        var child_elements = my_content.childNodes;
        for(var i=0; i<child_elements.length; i++){
            console.log(child_elements[i]);
        }
    // part iii
        var all_elements = document.getElementsByClassName("render");
        for(var i=0; i<all_elements.length; i++){
            console.log(all_elements[i].innerHTML);
        }
    // part iv
        var firstname_input_field = document.getElementById("first-name");
        firstname_input_field.value = "M.Shaheer";
    // part v
        var lastname_input_field = document.getElementById("last-name");
        var email_input_field = document.getElementById("email");
        lastname_input_field.value = "khan";
        email_input_field.value= "m.shaheerkhan199@gmail.com";

// Question 2
    // part i
        var element = document.getElementById("form-content");
        var node_type = element.nodeType;
        console.log(node_type); 
    // part ii
        var element = document.getElementById("lastName");
        var node_type = element.nodeType;
        var child_node = element.childNodes
        console.log(node_type)
        console.log(child_node[0])
    // part iii
        var element = document.getElementById("lastName");
        element.innerHTML = "Last Name: Smith";
    // part iv
        var element = document.getElementById("main-content");
        var first_child = element.firstChild;
        var last_child = element.lastChild;
        console.log(first_child);
        console.log(last_child);
    // part v
        var element = document.getElementById("lastName");
        var previous_sibling = element.previousSibling;
        var next_sibling = element.nextSibling;
        console.log(previous_sibling);
        console.log(next_sibling);
    // part vi
        var element = document.getElementById("email");
        var parent = element.parentNode;
        var node_type = element.nodeType;
        console.log(parent);
        console.log(node_type);
