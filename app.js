//chapter 9

//Q1 

var cityName = prompt("Enter the city name:");

if (cityName.toLowerCase() === "karachi") {
    alert("Welcome to the city of lights");
}


//Q2

var gender = prompt("your Gender")
 if(gender === "male"){
    alert("wellcome sir")
 }
 else if(gender === "female"){
    alert("wellcome maam")
 }
 else{
    alert("wellcome")
 }

 //Q3

var signalColor = prompt("Enter the color of the road traffic signal (Red, Yellow, or Green):");

switch (signalColor) {
    case "red":
        alert("Must Stop");
        break;
    case "yellow":
        alert("Ready to move");
        break;
    case "green":
        alert("Move now");
        break;
    
}

//Q4

var remaning_fuel = prompt("Enter remaning fuel in car")

if(remaning_fuel > 0.25 || remaning_fuel === 0.25){
    alert("“Please refill the fuel in your car”")
}
else{
    alert("fuel is okay")
}

//Q5


 var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

 var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
 var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
 var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
 if (true){
alert("True");
}
if (false){
alert("False");
}

//Q6

var subject1 = parseInt(prompt("Enter marks obtained from 100 marks in english :"));
var subject2 = parseInt(prompt("Enter marks obtained from 100 marks in urdu:"));
var subject3 = parseInt(prompt("Enter marks obtained from 100 marks in islamiat:"));


var totalMarks = 300 ;

var totalObtainedMarks = subject1 + subject2 + subject3;


var percentage = (totalObtainedMarks / totalMarks) * 100;


var grade;
if (percentage >= 80) {
    grade = "A+";
} else if (percentage >= 70) {
    grade = "A";
} else if (percentage >= 60) {
    grade = "B";
} else if (percentage >= 50) {
    grade = "C";
} else if (percentage >= 40) {
    grade = "D";
} else {
    grade = "Fail";
}


document.write("<h2>Result</h2>");
document.write("<p>Total Marks: " + totalMarks + "</p>");
document.write("<p>Marks Obtained: " + totalObtainedMarks + "</p>");
document.write("<p>Percentage: " + percentage.toFixed(2) + "%</p>");
document.write("<p>Grade: " + grade + "</p>");
document.write("<p>Remarks: ");

if (grade === "Fail") {
    document.write("Sorry, you have failed.");
} else {
    document.write("Congratulations!");
}
document.write("</p>");

//Q7


var secretNumber = Math.floor(Math.random() * 10) + 1;


var userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"))

if (userGuess === secretNumber) {
    alert("Bingo! Correct answer");
} else if (userGuess === secretNumber - 1 || userGuess === secretNumber + 1) {
    alert("Close enough to the correct answer");
} else {
    alert("Sorry, incorrect guess. The correct number was " + secretNumber);
}


//Q8


var number = parseInt(prompt("Enter a number:"));

// Check if the number is divisible by 3
if (number % 3 === 0) {
    alert(number + " is divisible by 3.");
} else {
    alert(number + " is not divisible by 3.");
}

//Q9

var number = parseInt(prompt("Enter a number:"));

// Check if the number is even or odd
if (number % 2 === 0) {
    alert(number + " is an even number.");
} else {
    alert(number + " is an odd number.");
}

//Q10

var T = +prompt("what is the temperature")

if( T === 40){
    alert("“It is too hot outside.”")
}
else if( T === 30){
    alert("“The Weather today is Normal.”")
}
else if( T === 20){
    alert("“Today’s Weather is cool.”")

}
else if( T === 10){
    alert("“OMG! Today’s weather is so Cool.”")
}
else{
    alert("invilad number")
}

//Q11

// Prompt the user to enter the first number
var firstNumber = parseFloat(prompt("Enter the first number:"));

// Prompt the user to enter the second number
var secondNumber = parseFloat(prompt("Enter the second number:"));

// Prompt the user to enter the operation (+, -, *, /, %)
var operation = prompt("Enter the operation (+, -, *, /, %):");

// Variable to store the result of the calculation
var result;

// Perform the calculation based on the operation
if (operation === "+") {
    result = firstNumber + secondNumber;
} else if (operation === "-") {
    result = firstNumber - secondNumber;
} else if (operation === "*") {
    result = firstNumber * secondNumber;
} else if (operation === "/") {
       result = firstNumber / secondNumber

} else if (operation === "%") {
    
    result = firstNumber % secondNumber

} else {
    // Handle invalid operation input
    result = "Invalid operation";
}

alert("Result: " + result);



//Q12


var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
}
else {
greeting = "Good evening";
}




//Q13

var your_pass = "Hassan123"
var password = prompt("Enter your password")

if(your_pass == password){

    alert("correct!")

}
else if(your_pass !== password){
    alert("“Incorrect password”")
}
else if (password == ""){
    alert("please enter your password")
}


//Q14


var firstInteger = parseInt(prompt("Enter the first integer:"));


var secondInteger = parseInt(prompt("Enter the second integer:"));

// Check if the first integer is greater than the second integer
if (firstInteger > secondInteger) {
    alert("The larger integer is: " + firstInteger);
} else if (secondInteger > firstInteger) {
    alert("The larger integer is: " + secondInteger);
} else {
    // If both integers are equal
    alert("Both integers are equal: " + firstInteger);
}



//////////////////////////////////////