//var myArray = [{"athlete": "Michael", "age": 12, "country": "United States", "year": 2008, "date": "24/08/2008" },
//{ "athlete": "Michael Phelps", "age": 27, "country": "United States", "year": 2012, "date": "12/08/2012" },
//{ "athlete": "Natalie Coughlin", "age": 25, "country": "United States", "year": 2008, "date": "24/08/2008" }];
//for (var i = 0; i <  myArray.length ; i++)
//{
//   console.log(myArray[i].athlete);
//}
// let i = 0;
// while (i < myArray.length){
//    console.log(myArray[i].athlete)
//     i++;
// }

 
// let i = 0;
// do {
//    console.log(myArray[i].athlete);
//     i++;
//} while(i <myArray[i].athlete);
 

//for (var n = 0; n <  25; n++)
//{
//   console.log(myArray[i].athlete);
//} 



// var a = 1;
// var b = 2;

// console.log(a + b);

// if(a===b){
//     console.log('Meet');
// } else {
//     console.log('Jayesh');
// }


//var c = a + b; // 3

// if(false){
//     console.log('c is less than 0');
// } else if(c >= 0 && c <= 10) {
//     console.log('c is greater than 0 and less than 10');
// } else if(c >= 10 && c <= 20){
//     console.log('c is greater tha 10 and less than 20');
// } else {
//     console.log('c is greater than 20');
// }



// switch (c) {
//     case 1:
//         console.log('Its 1');
//         break;
//     case 3: 
//         console.log('Its 2');
//         break;
//     default:
//         console.log('Default!');
//         break;
// }


// var input = {
//     name: 'Jayesh',
//     value: "2"
// }

// console.log(input.value)

// var s1 = [{ "athlete": "Michael", "age": 23, "country": "United States", "year": 2008, "date": "24/08/2008" },
// { "athlete": "Michael Phelps", "age": 27, "country": "United States", "year": 2012, "date": "12/08/2012" },
// { "athlete": "Natalie Coughlin", "age": 25, "country": "United States", "year": 2008, "date": "24/08/2008" }];

// for (var i = 0; i < s1.length; i++) { // Entry controlled loop
//     console.log(s1[i].athlete); // code
// }

// 1: var i=0 - i is declared to 0  - only once
// 2: i<10 - checks for condition - 5<5 - false - come out of the loop
// 3: will execute code in for loop  - 0,1,2,3,4 gets printed
// 4: i++ - will do post inc (4++ is 5)
// 5: Repeat from setp 2

// var a = 9; // init

// while (a < 5) { // Entry controlled Loop
//     console.log(a);
//     a++;
// }

// 1: init
// 2: cond check a<5  =-=== false - come out of the loop
// 3: print 0
// 4: inc/dec => a++
// 5: go to step 2

// do {
//     console.log(a);
//     a++;
// } while (a < 5); // exit controlled loop


// var student = {
//     name: 'Jayesh',
//     class: '1'
// }

// console.log(student);

// student.school = 'XYZ school!';

// console.log(student);


// var arr = ['A', 'B', 9, 'fsgsdgdsf', true];

// arr[10] = 'dgfdgdsf';

// console.log(arr); // ?

//console.log(s1.length); // Natalie Coughlin


// If u want to call a piece of code - multiple times/ when ever need and reuse it. We write a function.

// function defination - Function without parameter / Basic Function
// function display() { // This is a function declaration
//     console.log('Hello!'); // This function body -can contain mul LOC
// }

// display(); // Syntax for function call. -> When ever u call this the function gets executed.


// Function with Parameter (message - is parameter here)
// function display(message) { // Function 
//     console.log(message);
// }

// display('Hello!');

// display('Hi!');

// var input = {
//     value: "2"
// }

//===========================================================Function==================================================================

// Function always returns something!!
// function add() {
//    var value1 = document.getElementById('a').value;
//    var value2 = document.getElementById('b').value;
//    var res= parseInt(value1) + parseInt(value2);
//    document.getElementById("result").innerHTML = res;
   
// }
// function subtract() {
//    var value1 = document.getElementById('a').value;
//    var value2 = document.getElementById('b').value;
//    var res= parseInt(value1) - parseInt(value2);
//    document.getElementById("result").innerHTML = res;
   
// }
// function multiply() {
//    var value1 = document.getElementById('a').value;
//    var value2 = document.getElementById('b').value;
//    var res= parseInt(value1) * parseInt(value2);
//    document.getElementById("result").innerHTML = res;
   
// }
// function Divide() {
//    var value1 = document.getElementById('a').value;
//    var value2 = document.getElementById('b').value;
//    var res= parseInt(value1) / parseInt(value2);
//    document.getElementById("result").innerHTML = res;
   
// }
// function percentage() {
//    var value1 = document.getElementById('a').value;
//    var value2 = document.getElementById('b').value;
//    var res= parseInt(value1) % parseInt(value2);
//    document.getElementById("result").innerHTML = res;
   
// }

//--------------------------------function Switch methood----------------------------------

// function Switchone(res){
//       var value1 = document.getElementById('a').value;
//       var value2 = document.getElementById('b').value;

//       switch (res) {
//            case "+":
//                document.getElementById("result").innerHTML = value1 + value2;
//             case "-":
//                document.getElementById("result").innerHTML = value1 - value2;
//             break;
//             case "*":
//                document.getElementById("result").innerHTML = value1 * value2;
//             break;
//             case "/":
//                document.getElementById("result").innerHTML = value1 / value2;
//             break;
//             case "%":
//                document.getElementById("result").innerHTML = value1 % value2;
//             break;
//            default:
//          }
         
// }

//----------------------------------function if,else------------------------------------------------



// function calculate() {
//    var value1 = document.getElementById('a').value;
//    var value2 = document.getElementById('b').value;
//    var res= parseInt(value1) + parseInt(value2);
//    document.getElementById("result").innerHTML = res;

//    if(res == "+"){
//       document.getElementById("result").innerHTML = parseInt(value1) + parseInt(value2);
//    }
//    else if(res == "-"){
//       document.getElementById("result").innerHTML = parseInt(value1) - parseInt(value2);
//    }
//    else if(res == "*"){
//       document.getElementById("result").innerHTML = parseInt(value1) * parseInt(value2);
//    }
//    else if(res == "/"){
//       document.getElementById("result").innerHTML = parseInt(value1) / parseInt(value2);
//    }
//    else if(res == "%"){
//       document.getElementById("result").innerHTML = parseInt(value1) - parseInt(value2);
//    }
//    else{
//       console.log('Invalid operation:', res);
//    }
// }

 //=========================================================jquery==========================================

 function getweatherData(){
     var city = document.getElementById('city').value;
     var baseURL ="http://api.openweathermap.org/data/2.5/weather?q=";
     var tailURL ="&appid=4e8fe55b900263c5f83603ed631e15ad";
     var finalURL = baseURL + city + tailURL;
     console.log(finalURL);

     $.ajax ({
         url: finalURL,
         success: function(data){
             console.log(data);
             document.getElementById('cityName').innerHTML = city;
             document.getElementById('lon').innerHTML = data.coord.lon;
             document.getElementById('lat').innerHTML = data.coord.lat;
         },
         error: function (eMessage){
             console.log(eMessage);
         }

     });
 }