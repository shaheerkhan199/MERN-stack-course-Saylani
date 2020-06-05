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