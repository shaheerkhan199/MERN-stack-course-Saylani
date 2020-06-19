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
    




