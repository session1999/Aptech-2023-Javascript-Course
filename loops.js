// // while loop

// let x = 5;

// while (x == 5) {
//   alert("welcome to js loops");
//   x++;
// }

// x = 1;
// while (x <= 5) {
//   document.write("<br> My name is Casmir.<br>");
//   x++;
// }

// let num = 1;

// while (num <= 10) {
//   document.write(num + "<br>");
//   num++;
// }

// let newNum = 0;
// let sum = 0;

// while (newNum <= 10) {
//   sum += newNum;
//   newNum++;
// }
// document.write(sum);

//for loop

// let sum1 = 10;

// for (i = 0; i <= 10; i++) {
//   document.write(i + "<br>");
// }

// let newTry = 10;

// let sum2 = 15;

// sum2 += newTry;

// for (i = 0; i <= 10; i++) {
//   document.write(i);
// }

//class work
//write a js program that accepts a value from user and prints multiples of it up until 12

// let num12 = 12;

// let userInput = prompt("Please enter a value for user: ");

// for (i = 1; i <= 12; i++) {
//   document.write(num12 + " * " + userInput + " = " + num12 * i + "<br>");
// }

// write a javascript sum of all even numbers till +num+ "is " +sum

// inputNumber = parseInt(prompt("Please enter a number: "));

// let sum = 0;

// for (i = 1; i <= inputNumber; i++) {
//   if (i % 2 == 0) {
//     sum += i;
//   }
// }
// document.write(
//   "The sum of all the even numbers till" + inputNumber + "is" + sum
// );

//write a js program that accepts 2 numbers from the user and prints out the numbers divisible by 3 and 5 between both numbers

newInput1 = parseInt(prompt("Please enter a number: "));

newInput2 = parseInt(prompt("Please enter a number: "));

for (let i = newInput1; i < newInput2; i++) {
  if ((i % 3 == 0) & (i % 5 == 0)) {
    document.write(i + "is divisible by both 3 and 5 <br>");
  }
}

// write a js program that checks a username and password is correct.
//print (login successful) only when the details are correct
//print (invalid login details) only when the details is incorrect

// const username1 = "Aptech";
// const password = "Aptech1234";

// if (username1 == "Aptech" || password == "Aptech1234") {
//   document.write("Your login is successful");
// } else {
//   document.write("Invalid password");
// }

//class work
// what is the capital of nigeria? Abuja is the right answer
// if abuja is not entered the question will be asked as much times as possible

let capital;

do {
  capital = prompt("Please enter the capital of Nigeria: ");
} while (capital != "abuja" && capital != "Abuja");

document.write("This is the capital of nigeria", capital);

//Break statement

// let inputNum = parseInt(prompt("Enter number: ", ""));
// let num = 2;
// while (num <= inputNum - 1) {
//   if (inputNum % num == 0) {
//     alert(inputNum + " is not a prime number ");
//     break;
//   }
//   num++;
// }
// if (num == inputNum) {
//   alert(inputNum + " is a prime number");
// }

// //example two

// let i = 1;

// while (i < 5) {
//   alert(i);
//   if (i == 3) {
//     alert(i + " is now number 3");
//     break;
//   }
//   i++;
// }

// //example three

// let number = 1;

// while (true) {
//   if (number % 2 == 0) {
//     alert("the first even number is " + number);
//     break;
//   }
//   number++;
// }

//classwork

//write a javascript program that accepts a code from the user and checks if the code is valid. if its not valid... display invalid pincode

//the most important part of this program is that the user can only be asked for the code three times.After which the program stops

// let validCode = 2345;
// let checker = 1;

// while (checker <= 3) {
//   let inputCode = parseInt(prompt("Enter pinCode: "));

//   if (inputCode == validCode) {
//     alert("Code is valid");
//     break;
//   } else {
//     alert("code is invalid");
//   }
//   checker++;
// }

// //class work - alert showing how many tries left until count down is over

// let validCode1 = 2345;
// let checker1 = 3;

// while (checker1 > 0) {
//   let inputCode = parseInt(prompt("Enter pinCode: "));
//   checker1--;

//   if (inputCode == validCode) {
//     alert("Code is valid");
//     break;
//   } else {
//     alert(checker1 + " more tries");
//   }
// }

//continue statement in JS

// i = 0;

// while (i < 5) {
//   i++;
//   if (i == 3) {
//     continue;
//   }
//   alert(i);
// }

// for (i = 1; i < 5; i++) {
//   if (i == 3) {
//     continue;
//   }
//   document.write(i);
// }

//write a Js program that prints only the even numbers between 1-100

// for (i = 1; i < 100; i++) {
//   if (i % 2 == 0) {
//     continue;
//   }
//   document.write(i + "<br>");
// }

//class work

// i = 0;

// while (i < 100) {
//   i++;
//   if (i % 2 == 0) {
//     continue;
//   }
//   document.write(i + "<br>");
// }

//class work 3

// print the prime numbers between 1-50

let count = 0;

let i, j;

for (j = 2; j <= 50; j++) {
  for (i = 1; i <= j; i++) {
    if (j % i == 0) count++;
  }

  if (count == 2) document.write(j + "<br>");
  count = 0;
}
