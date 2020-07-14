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