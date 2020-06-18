// chapters 21-25
// Task 1
    // var firstName = prompt("Enter your first name");
    // var lastName = prompt("Enter your last name");
    // var fullName = firstName+" "+lastName;
    // alert("Hello "+ fullName + " Good to see you.")
// Task 2
    // var favPhone = prompt("Enter your favourite Phone name and model");
    // var lengthOfStr = favPhone.length;
    // document.write("My favourite phone is : " + favPhone + "<br>");
    // document.write("Length of string: "+ lengthOfStr);
// Task 3
    // var country = "Pakistani";
    // var indexOfn = country.indexOf('n');
    // document.write("string: "+ country + "<br>");
    // document.write("index of \'n\' is: "+indexOfn);
// Task 4
    // var str = "Hello World";
    // var indexOfl = str.lastIndexOf('l');
    // document.write("String: "+ str + "<br>");
    // document.write("Last index of \'l\' is: "+ indexOfl);

// Task 5
    // var country = "Pakistani";
    // var char = country.charAt(3);
    // document.write("String: "+ country + "<br>");
    // document.write("Character at index 3 is: "+ char); 
// Task 6
    // var firstName = prompt("Enter your first name");
    // var lastName = prompt("Enter your last name");
    // var fullName = firstName.concat(" ",lastName);
    // alert("Hello "+ fullName + " Good to see you.")
// Task 7
    // var city = "Hyderabad";
    // var newCity = city.replace("Hyder", "Islam");
    // document.write("City: "+city+"<br>");
    // document.write("After Replacement: "+newCity)
// Task 8
    // var message = "Ali and Sami are best friends. They play cricket and football together.";
    // var newmsg = message.replace(/and/g,"&");
    // console.log(newmsg);

// Task 9
    // var num = "472";
    // document.write("Value: "+num+"<br>");
    // document.write("Type: "+typeof(num)+"<br>");
    // num = Number(num);
    // document.write("Value: "+num+"<br>");
    // document.write("Type: "+typeof(num)+"<br>");

// Task 10
    // var userInput  = prompt("Enter some lower case sentence");
    // document.write("User Input: "+userInput+"<br>");
    // userInput = userInput.toUpperCase();
    // document.write("Upper Case: "+userInput);

// Task 11
    // var userInput  = prompt("Enter sentence in any case");
    // document.write("User Input: "+userInput+"<br>");
    // userInput = userInput.slice(0,1).toUpperCase() + userInput.slice(1, userInput.length);
    // document.write("Title Case: "+userInput);
// Task 12
    // var num = 35.36;
    // result = num.toString();
    // result = result.replace(".","");
    // document.write("Number: ", num+"<br>");
    // document.write("Result: "+result);

// Task 13
    // var userName = prompt("Enter your username");
    // for(var i=0; i<userName.length; i++){
    //     if(userName[i] == "@" || userName[i] == "." || userName[i] == ',' || userName[i] == "!"){
    //         document.write("Please enter a valid user name");
    //         break;
    //     }
    // }
// Task 14
    // items = ["cake", "apple pie", "cookie", "chips", "patties"];
    // var searchItem = prompt("Enter item name to search").toLowerCase(); 
    // var itemFound = false;
    // for(var i=0; i<items.length; i++){

    //     if(searchItem === items[i]){
    //         document.write(searchItem+" is available at index "+i+" in our bakery");
    //         itemFound = true;
    //         break;
    //     }
    // }
    // if(!itemFound)
    // {
    //     document.write("Sorry! This item is not available in our bakery");
    // }

// Task 15
    // var password = prompt("Enter your password");
    // if(password.length < 6){
    //     document.write("password must be at least 6 characters long <br>");
    // }
    // if(!isNaN(password[0]*2))
    // {
    //     document.write("password should not start with a number <br>");
    // }
    // if(!(password.match(/[A-Z]+/) || (password.match(/[A-Z]+/)))){
    //     document.write("Password should contain Alphabets and Numbers <br>");
    // }

// Task 16
    // var university = "University of Karachi";
    // var list = university.split("");
    // for(var i=0; i<university.length; i++){
    //     document.write(list[i] + "<br>")
    // }
// Task 17
    // var userInput = prompt("Enter any string");
    // var lastChar = userInput.charAt(userInput.length-1);
    // document.write("User Input: "+userInput+"<br>");
    // document.write("Last character of input: "+lastChar);
// Task 18
    // var text = "The quick brown fox jumps over the lazy dog".toLowerCase();
    // count = 0;
    // listOfWords = text.split(" ");
    // for(var i=0; i<listOfWords.length; i++){
    //     if(listOfWords[i] === "the"){
    //         count++;
    //     }
    // }
    // document.write("Text: "+ text + "<br>");
    // document.write("There are "+count+ " occurence(s) of word 'the'");

// Chapter 26-30 
// Task 1
    // var num = (+prompt("Enter any floating point positive number"));
    // var roundNum = Math.round(num);
    // var floorNum = Math.floor(num);
    // var ceilNum = Math.ceil(num);
    // document.write("number: "+num+"<br>");
    // document.writeln("round off value: "+ roundNum+"<br>");
    // document.writeln("floor value: "+ floorNum+"<br>");
    // document.writeln("ceil value: "+ ceilNum+"<br>");
    
// Task 2
    // var num = (+prompt("Enter any floating point negative number"));
    // var roundNum = Math.round(num);
    // var floorNum = Math.floor(num);
    // var ceilNum = Math.ceil(num);
    // document.write("number: "+num+"<br>");
    // document.writeln("round off value: "+ roundNum+"<br>");
    // document.writeln("floor value: "+ floorNum+"<br>");
    // document.writeln("ceil value: "+ ceilNum+"<br>");

// Task 3
    // var num = -4;
    // var absOfNum = Math.abs(num);
    // document.write("The absolute value of "+num+" is "+absOfNum);
// Task 4
    // var random = Math.ceil(Math.random() * 6);
    // document.write("Random dice value is: "+ random);
// Task 5
    // var random = Math.ceil(Math.random() * 2);
    // if(random === 2){
    //     document.write("Radom Coin value: Heads");
    // }else{
    //     document.write("Radom Coin value: Tails ");
    // }

// Task 6
    // var randomNum = Math.ceil(Math.random() * 100);
    // document.writeln("Random Number between 1 and 100: "+ randomNum);
// Task 7
    // var weight = prompt("Enter your weight in kilograms");
    // weight = parseInt(weight);
    // document.writeln("The weight of user is "+weight+" Kilograms");

// Task 8
    // var secretNum = Math.ceil(Math.random() * 10);
    // var userGuess = (+prompt("Input a number between 1 and 10: "));
    // if(userGuess === secretNum){
    //     document.writeln("Congratulations! you win");
    // }else{
    //     document.writeln("Try again");
    // }
