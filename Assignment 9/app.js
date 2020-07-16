// Chapter 38-42
// Question 1
    // function power(base, exp){
    //     var result = 1;
    //     for(var i=1; i<=exp; i++){
    //         result = result*base; 
    //     }
    //     return result;
    // }
    // var pow = power(5,3);
    // document.write("result is: ", pow);
// Question 2
    // function is_leap_year(year){
    //     if((year % 4 == 0) && (year % 100 != 0)){
    //         document.write(year+" is leap year.");
    //     }else if(year % 400 == 0){
    //         document.write(year+" is leap year.");
    //     }else{
    //         document.write(year+" is not leap year.");
    //     }
    // }
    // var year = (+prompt("Enter year to check its leap year or not"));
    // is_leap_year(year);
// Question 3
    // function helper_function(a,b,c){
    //     return ((a+b+c)/2)
    // }
    // function calculate_area_of_triangle(a,b,c){
    //     var S = helper_function(a,b,c);
    //     var area = S*((S-a)*(S-b)*(S-c));
    //     return area;
    // }
    // var area = calculate_area_of_triangle(5,6,4);
    // document.write("Calculation result of area: "+ area);
    
// Question 4
    // function calc_per(sub1, sub2, sub3){
    //     // Suppose each subject have 100 marks total so total marks of 3 subjects is 300
    //     var total_marks = 300;
    //     var total_obtain = sub1+sub2+sub3;
    //     var percentage = ((total_obtain/total_marks)*100).toFixed(2);
    //     return percentage+"%";
    // }
    // function calc_avg(sub1, sub2, sub3){
    //     var average = ((sub1+sub2+sub3)/3).toFixed(2);
    //     return average;
    // }
    // function mainFunction(subj1, subj2, subj3){
    //     var per = calc_per(subj1, subj2, subj3);
    //     var avg = calc_avg(subj1, subj2, subj3);
    //     document.write("Average of your marks is: "+avg+"<br>");
    //     document.write("Your percentage is: "+per);
    // }
    // mainFunction(90,40,60);
// Question 5
    // var name = "Shaheer";
    // function find_index_of_char(string, char){
    //     for(var i=0; i<string.length; i++){
    //         if(string[i] === char){
    //             return i;
    //             break;
    //         }     
    //     }
    // }
    // var index =  find_index_of_char(name, "a");
    // document.write(index);
// Question 6
    // var sent = "i have an apple to eat";
    // function delete_all_vowels(sentence){
    //     sentence = sentence.replace(/[aeiou]/g, '');
    //     return sentence
    // }
    // var updated_sentence = delete_all_vowels(sent);
    // document.write("Original Sentence: "+sent+"<br>");
    // document.write("After replacing Vowels: "+updated_sentence);

// Question 7
    // function count_any_two_vowels(sentence){
    //     var count = 0;
    //     var vowels = ['a','e','i','o','u'];
    //     document.write("Occurence of two vowels are: ");
    //       for(var i=0; i<sentence.length;i++){
    //           if(vowels.includes(sentence[i]) && vowels.includes(sentence[i+1]))
    //           {
    //               document.write(sentence[i]+sentence[i+1]+",");
    //               count++;
    //           }
    //       }
    //       document.write("<br> Counts is: "+count);  
    // }
    // count_any_two_vowels("Pleases read this application and give me gratuity");
// Question 8
    // function convert_into_meters(distance){
    //     var meters  = distance*1000;
    //     return meters;
    // }
    // function convert_into_feet(distance){
    //     var feet = distance*3280.84;
    //     return feet;
    // }
    // function convert_into_inches(distance){
    //     var inches = distance*39370.1;
    //     return inches;
    // }
    // function convert_into_centimeters(distance){
    //     var cent = distance*100000;
    //     return cent;
    // }
    // var distance = (+prompt("Enter distance in km.."))
    // var meter = convert_into_meters(distance);
    // var feet = convert_into_feet(distance);
    // var inches = convert_into_inches(distance);
    // var centimeters = convert_into_centimeters(distance);
    // document.write(distance+" km = "+ meter +" meters <br>");
    // document.write(distance+" km = "+ feet +" feet <br>");
    // document.write(distance+" km = "+ inches +" inches <br>");
    // document.write(distance+" km = "+ centimeters +" centimeters <br>");

// Question 9
    // function calculate_overtime(hours){
    //     var per_hour_overtime = 12;
    //     var overtime_amount;
    //     if(hours > 40){
    //         overtime_amount = hours*per_hour_overtime;
    //     }
    //     return overtime_amount;
    // } 
    // var no_of_hours = (+prompt("Enter how many hours you worked"));
    // document.write("Your overtime amount is: "+calculate_overtime(no_of_hours));
// Question 10
    // var amount = (+prompt("Enter amount to withdraw"));
    // var hundred= Math.floor(amount/100);
    // var fifty = Math.floor((amount % 100) / 50) ;
    // var ten =  Math.floor((((amount % 100) % 50) / 10));
    // var remaining = Math.floor((((amount % 100) % 50) % 10));
    // document.write("You will have "+ hundred +" hundred notes "+fifty +" fifty notes and "+ten+" ten notes <br>");
    // document.write("Your remaining amount is: "+ remaining);

// Chapter 43-48
// Question 1
    // <a href="Javascript:void(0)" onclick="alert('Your clicked on a link')">Click on me</a>
// Question 2
    // <div>
    //     <a href="Javascript:void(0)" onclick="show_alert();"><img src="images/mobile.jpg" height="300" width="300" border="1"></a>
    // </div>
    // function show_alert(){
    //     alert("Thanks for purchasing a phone from us");
    // }

// Question 3
    // <table>
    //     <tr>
    //         <th>Index</th>
    //         <th>Name</th>
    //         <th>Age</th>
    //         <th></th>
    //     </tr>
    //     <tr>
    //         <td>0</td>
    //         <td>Jhone</td>
    //         <td>10</td>
    //         <td><input type="button" value="Delete" onclick="deleteRow(this)"></td>
    //     </tr>
    //     <tr>
    //         <td>1</td>
    //         <td>Doe</td>
    //         <td>9</td>
    //         <td><input type="button" value="Delete" onclick="deleteRow(this)""></td>
    //     </tr>
    //     <tr>
    //         <td>2</td>
    //         <td>Mark</td>
    //         <td>10</td>
    //         <td><input type="button" value="Delete" onclick="deleteRow(this)"></td>
    //     </tr>
    //     <tr>
    //         <td>3</td>
    //         <td>James</td>
    //         <td>8</td>
    //         <td><input type="button" value="Delete" onclick="deleteRow(this)"></td>
    //     </tr>
    //     <tr>
    //         <td>4</td>
    //         <td>Kashif</td>
    //         <td>15</td>
    //         <td><input type="button" value="Delete" onclick="deleteRow(this)"></td>
    //     </tr>
    //     <tr>
    //         <td>5</td>
    //         <td>Salman</td>
    //         <td>16</td>
    //         <td><input type="button" value="Delete" onclick="deleteRow(this)"></td>
    //     </tr>
    //     <tr>
    //         <td>6</td>
    //         <td>Ahmed</td>
    //         <td>19</td>
    //         <td><input type="button" value="Delete" onclick="deleteRow(this)"></td>
    //     </tr>
    //     <tr>
    //         <td>7</td>
    //         <td>Zeeshan</td>
    //         <td>22</td>
    //         <td><input type="button" value="Delete" onclick="deleteRow(this)"></td>
    //     </tr>
    //     <tr>
    //         <td>8</td>
    //         <td>Irfan</td>
    //         <td>12</td>
    //         <td><input type="button" value="Delete" onclick="deleteRow(this)"></td>
    //     </tr>
    //     <tr>
    //         <td>9</td>
    //         <td>Qasim</td>
    //         <td>28</td>
    //         <td><input type="button" value="Delete" onclick="deleteRow(this)"></td>
    //     </tr>
    // </table>
    // function deleteRow(btn) {
    //     var row = btn.parentNode.parentNode;
    //     console.log(row.parentNode);
    //     row.parentNode.removeChild(row);
    //   }

// Question 4
    // <h1>Just mouse over on image and see the effect</h1>
    // <img src="images/offbulb.jpg" id="image" height="300" width="300" onmouseout="change_image('offbulb.jpg');" onmouseover="change_image('onbulb.jpg');">
    // function change_image(image_name){
    //     document.getElementById("image").src = "images/"+image_name;
    // }
// Question 5
    // <div>
    //     <button id="dec" onClick="decrement('textBox2');"><b>-</b></button>
    //     <input type="text" id="textBox2" value="1" readonly>
    //     <button id="inc" onClick="increment('textBox2');"><b>+</b></button>
    // </div>
    // function increment(textBoxId) {
    //     var textBox = document.getElementById(textBoxId);
    //     var textBoxValue = Number(textBox.value);
    //     textBoxValue++;
    //     textBox.value = textBoxValue;
    // }
    // function decrement(textBoxId) {
    //     var textBox = document.getElementById(textBoxId);
    //     var textBoxValue = Number(textBox.value);
    //     if (textBoxValue != 1) {
    //         textBoxValue--;
    //     }
    //     textBox.value = textBoxValue;
    // }

    // Chapter 49-52
    // Question 1
    // <form>
    //     <h1>Signup Form</h1>
    //     <label>Full name:</label>
    //     <input type="text" id="full_name">
    //     <br><br>
    //     <label>Enter password:</label>
    //     <input type="password" id="pass">
    //     <br><br>
    //     <label>Cnic</label>
    //     <input type="text" id="cnic">
    //     <br><br>
    //     <label>City</label>
    //     <select id="city">
    //         <option value="karachi">karachi</option>
    //         <option value="Lahore">Lahore</option>
    //         <option value="Islamabad">Islamabad</option>
    //         <option value="Hyderabad">Hyderabad</option>
    //     </select>
    //     <br><br>
    //     <input type="button" value="submit" onclick="display_data();">
    //     <input type="reset">
    // </form>
        // function display_data(){
        //     document.write("Your entered these details in form<br>");
        //     var full_name_field = document.getElementById("full_name");
        //     var pass_field = document.getElementById("pass");
        //     var cnic_field = document.getElementById("cnic");
        //     var city_field = document.getElementById("city");
        //     document.write(full_name_field.value +"<br>");
        //     document.write(pass_field.value +"<br>");
        //     document.write(cnic_field.value +"<br>");
        //     document.write(city_field.value +"<br>");
        // }
    
// Question 2
    // <p id="content_para">
    //     Lorem, ipsum...
    // </p>
    // <a href="Javascript:void(0)" onclick="see_more();">See more</a>
    // function see_more(){
    //     var content = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit, rerum cupiditate. Nesciunt debitis hic temporibus quis molestias eius porro dicta? Magnam quos nesciunt est, aspernatur ullam libero placeat quia alias?";
    //     document.getElementById("content_para").innerHTML = content;
    // }
// Question 3
    // <style>
    //     .editBox{
    //         display: none;
    //     }
    // </style>
    // <form>
        // <h1>Enter your data</h1>
        // <label>Your name</label>
        // <input type="text" id="name">
        // <br><br>
        // <label>Age</label>
        // <input type="text" id="age">
        // <br><br>
        // <input type="button" value="Add data" onclick="add_data_into_table();">
    // </form>
    // <br>
    // <table border="1" id="mytable">
        // <tr>
        //     <th>Index</th>
        //     <th>Name</th>
        //     <th>Age</th>
        //     <th></th>
        // </tr>
    // </table>
    // <div class="editBox" id="editBox">
        // <h1>Edit your data</h1>
        // <label>Your name</label>
        // <input type="text" id="editBoxName">
        // <br><br>
        // <label>Age</label>
        // <input type="text" id="editBoxAge">
        // <br><br>
        // <input type="button" value="Update" onclick="">
    // </div>
// function add_data_into_table(){
//     var rows = document.getElementsByTagName("tr");
//     var name_field = document.getElementById("name");
//     var age_field = document.getElementById("age");
//     var tr = document.createElement("tr");
//     var td0 = document.createElement("td");
//     var td1 = document.createElement("td");
//     var td2 = document.createElement("td");
//     var td3 = document.createElement("td");
//     var index = document.createTextNode(rows.length-1);
//     var name = document.createTextNode(name_field.value);
//     var age = document.createTextNode(age_field.value);
//     var deletebutton = document.createElement("button");
//     var editbutton = document.createElement("button");
//     var table = document.getElementById("mytable");
//     deletebutton.innerHTML = "Delete";
//     editbutton.innerHTML = "Edit";
//     deletebutton.onclick = function(){table.removeChild(tr)};
//     var editForm = document.getElementById("editBox");
//     editbutton.onclick = function(){
//         editForm.style.display = 'block';
//         document.getElementById("editBoxName").value = name_field.value;
//         document.getElementById("editBoxAge").value = age_field.value;
//         // console.log(table.rows[1].cells[0]);
//     };
//     td0.appendChild(index);
//     td1.appendChild(name);
//     td2.appendChild(age);
//     td3.appendChild(deletebutton);
//     td3.appendChild(editbutton);
//     tr.appendChild(td0);
//     tr.appendChild(td1);
//     tr.appendChild(td2);
//     tr.appendChild(td3);
//     table.appendChild(tr);
//     name_field.value = "";
//     age_field.value = ""
// }

// Chapter 52-57
//  Later assignments (Ambiguity)


// Chapter 58-67
// Question 1
    // // part i
    //     var my_content = document.getElementById("form-content");
    // // part ii
    //     var my_content = document.getElementById("form-content");
    //     var child_elements = my_content.childNodes;
    //     for(var i=0; i<child_elements.length; i++){
    //         console.log(child_elements[i]);
    //     }
    // // part iii
    //     var all_elements = document.getElementsByClassName("render");
    //     for(var i=0; i<all_elements.length; i++){
    //         console.log(all_elements[i].innerHTML);
    //     }
    // // part iv
    //     var firstname_input_field = document.getElementById("first-name");
    //     firstname_input_field.value = "M.Shaheer";
    // // part v
    //     var lastname_input_field = document.getElementById("last-name");
    //     var email_input_field = document.getElementById("email");
    //     lastname_input_field.value = "khan";
    //     email_input_field.value= "m.shaheerkhan199@gmail.com";
// Question 2
    // part i
        // var element = document.getElementById("form-content");
        // var node_type = element.nodeType;
        // console.log(node_type); 
    // part ii
        // var element = document.getElementById("lastName");
        // var node_type = element.nodeType;
        // var child_node = element.childNodes
        // console.log(node_type)
        // console.log(child_node[0])
    // part iii
        // var element = document.getElementById("lastName");
        // element.innerHTML = "Last Name: Smith";
    // part iv
        // var element = document.getElementById("main-content");
        // var first_child = element.firstChild;
        // var last_child = element.lastChild;
        // console.log(first_child);
        // console.log(last_child);
    // part v
        // var element = document.getElementById("lastName");
        // var previous_sibling = element.previousSibling;
        // var next_sibling = element.nextSibling;
        // console.log(previous_sibling);
        // console.log(next_sibling);
    // part vi
        // var element = document.getElementById("email");
        // var parent = element.parentNode;
        // var node_type = element.nodeType;
        // console.log(parent);
        // console.log(node_type);
