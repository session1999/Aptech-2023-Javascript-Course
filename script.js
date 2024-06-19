let first_name; //variable declaration

//Variable initialization
last_name = "Ademukwe";

document.write("Chelsea is a shitty club. Even Mr " + first_name + " Knows ");

//August 22 2023

//Arithemetic
//Unary Increment and Decrement Operators
//Pre increment ++num
//Post increment num++
//Pre decrement --num
//post decrement num--

// Example

let num = 5;

num++;

alert(num);

//Binary operators
// +,-,*,/,%

//Examples

let num1 = 20;
let num2 = 50;

result = num1 + num2;
document.write(
  "<p> The result of adding " + num1 + " and " + num2 + " is " + result
);

result = num1 - num2;
document.write(
  "<p> The result of subscracting " + num1 + " and " + num2 + " is " + result
);

result = num1 * num2;
document.write(
  "<p> The result of multiplying " + num1 + " and " + num2 + " is " + result
);

result = num1 / num2;
document.write(
  "<p> The result of dividing " + num1 + " and " + num2 + " is " + result
);

result = num1 % num2;
document.write(
  "<p> The reminder after dividing " + num1 + " and " + num2 + " is " + result
);

//classwork

let loanAmount = 34500;
let interest = 8;

let interestAmount, totalAmount;
interestAmount = loanAmount * (interest / 100);
totalAmount = loanAmount + interestAmount;
document.write("<B> Total amount to be paid ($) : </B>" + totalAmount + "<BR>");

//write a js program that adds two products and tax 10% on the total

//Also getting the user to input the value of the products

let prod1 = parseFloat(prompt("Please enter a value for product 1"));
let prod2 = parseFloat(prompt("Please enter a value for product 2"));

tax = ((prod1 + prod2) * 10) / 100;

total = tax + prod1 + prod2;

document.write("The total price payable is " + total);

//Example of relational operators include:

/*
< less than
> greater than
<= less than or equal to 
>= greater than or equal to
== equal to
!= not equal to
=== strictly equal to
*/

//Example 1

num1 = 20;
num2 = 30;

document.write(
  "<b> the value in num1: " +
    num1 +
    " is greater than the value in num2: " +
    num2 +
    ". ",
  (num1 > num2) + "<b>"
);
document.write(
  "The value in num1: " +
    num1 +
    " is lesser than the value in num2: " +
    num2 +
    " .",
  (num1 < num2) + "<b>"
);
document.write(
  "<b> the value in num1: " +
    num1 +
    " is greater than or equal to the value in num2: " +
    num2 +
    ". ",
  (num1 >= num2) + "<b>"
);
document.write(
  "<b> the value in num1: " +
    num1 +
    " is less than or equal to the value in num2: " +
    num2 +
    ". ",
  (num1 <= num2) + "<b>"
);
document.write(
  "<b> the value in num1: " +
    num1 +
    " the value in num1 is equal to the value in num2: " +
    num2 +
    ". ",
  (num1 == num2) + "<b>"
);
document.write(
  "<b> the value in num1: " +
    num1 +
    " the value in num1 is not equal to the value in num2: " +
    num2 +
    ". ",
  (num1 != num2) + "<b>"
);
//Example

//Not strictly equal to

let greetings = "Hello";
let greetings2 = "Hello";

document.write(
  "The value in greetings and greetings2 are strictly are not strictly equal: " +
    (greetings !== greetings2) +
    "<br>"
);

//Example strictly not equal to

document.write(
  "The value in greetings and greetings2 are strictly are not strictly equal: " +
    (greetings !== greetings2) +
    "<br>"
);

greetings = "Hello";
greetings2 = "Hello";

document.write(
  "The value in greetings and greetings2 are strictly are not strictly equal: " +
    (greetings !== greetings2) +
    "<br>"
);

document.write(
  "The value in greetings and greetings2 are not equal: " +
    (greetings != greetings2) +
    "<br>"
);

//Logical AND operator

let name = "John";
let age = 23;

document.write(
  "John's age is greater than or equal to 23 years : " + (name == "john") &&
    age >= 23
);
