//declare two variables x and y.Assign values to these variables. Number x should
//be printed only if it is less than 2000 or greater than 3000, and number y should
//be printed only it it is between 100 and 500

x = 3000;
y = 200;

if (x >= 2000 && x >= 3000) {
  document.write("You have entered the value for X");
} else if (y <= 100 && y >= 450) {
  document.write("You have entered the value for Y");
} else {
  document.write("Please enter the correct value");
}

//correction 1  -- This is checked with my work up as well
let x = 560;
let y = 400;

if (x < 2000 || x > 3000) {
  alert("The value of x must be less than 2000 and greater than 3000 " + y);
} else {
}
if (y > 100 && y <= 500) {
  alert("The value of y is " + y);
} else {
  alert("The value of y must be between 100 and 500 " + y);
}

//Assignment 2

let username = prompt("Please enter your initials: ");

switch (true) {
  case username == "a" || username == "A":
    alert("Hello " + username + " Your package belongs to category  Ada");
    break;
  case username == "b" || username == "B":
    alert("Hello " + username + " Your package belongs to category  Basic");
    break;
  case username == "c" || username == "C":
    alert("Hello " + username + " Your package belongs to category  Cobol");
    break;

  case username == "d" || username == "D":
    alert("Hello " + username + " Your package belongs to category  dBase 111");
    break;

  case username == "f" || username == "F":
    alert("Hello " + username + " Your package belongs to category  Fortan");
    break;

  case username == "p" || username == "P":
    alert("Hello " + username + " Your package belongs to category  Pascal");
    break;

  case username == "V" || username == "V":
    alert(
      "Hello " + username + " Your package belongs to category  Visual C++"
    );
    break;

  default:
    alert("The input does not match any of the above");
}

//Question 3

//accept values in three variables and print the highest value.

let count1 = parseInt(
  prompt("Please enter a value for your score count ONE: ")
);
let count2 = parseInt(
  prompt("Please enter a value for your score count TWO: ")
);
let count3 = parseInt(
  prompt("Please enter a value for your score count THREE: ")
);

let nowCount = Math.max(count1, count2, count3);

document.write("<br>Three numbers are ", count1, count2, count3);
document.write("<br>The largest number is ", nowCount);

//Correction 3 - to check with mine
let val1 = parseInt(prompt("Please enter a number: "));
let val2 = parseInt(prompt("Please enter a number: "));
let val3 = parseInt(prompt("Please enter a number: "));

if (val1 > val2 && val1 > val3) {
  alert("Value 1 is " + val1 + " and is the highest value");
} else if (val2 > val1 && val2 > val3) {
  alert("value 2 is " + val2 + "and is the highest value ");
} else {
  alert("value 3 is " + val3 + "and is the highest value");
}
