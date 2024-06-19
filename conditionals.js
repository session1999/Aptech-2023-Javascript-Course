// //conditionals

// // if statement

// //the IF statement executes the code within its body only if the condition is met or its true.

// number = parseInt(prompt("Enter a number: "));

// if (number == 10) {
//   document.write("the number enter is 10 ");
// }

// // if esle statement

// //for the if else statement. if the condition within the IF statement is not met, the statement within the body of the else statement is executed.

// if (number == 10) {
//   document.write("the number is 10 ");
// } else {
//   document.write("The number entered is not what is expected ");
// }

// // class work 1

// // write in js code that the user enters their names and their age and check if they are eligible to vote.

let user1 = parseInt(prompt("Please enter your name: "));

let age = parseInt(prompt("Please enter your age: "));

if (user1 < 18) {
  document.write("You are not eligible to vote ");

  if (age < 18) {
    document.write("You are not eligible to vote ");
  }
} else {
  document.write("You are eligible to vote");
}

// //Class assignment 2

// let num1 = parseInt(prompt("Please enter a number: "));

// if (num1 % 2 == 0) {
//   document.write("<br>The number is an odd number ");
// } else {
//   document.write("<br>The number is an even number");
// }

//If..else if statement

// write a js program that checks the grade of a student
// grade (distinction = 90 -100)
// credit = 75-89
// pass = 60 -74
// fail 50-0

// let grade = parseInt(prompt("Enter your marks to determine your grade: "));

// if (grade >= 90) {
//   document.write("Your marks is ", grade, " and your grade is distinction");
// } else if (grade > 75 && grade < 90) {
//   document.write("Your mark is ", grade, " and your grade is credit");
// } else if (grade > 59 && grade < 75) {
//   document.write("Your mark is ", grade, "  and your grade is pass");
// } else if (grade <= 59) {
//   document.write("Your mark is ", grade, " and your grade is failed");
// } else {
//   alert("Please enter a number");
// }

//Nested if statement

x = parseInt(prompt("Please enter a number: "));

if (x == 2) {
  y = parseInt(prompt("Please enter a number: "));
  if (y == 5) {
    alert("The values for x and y are " + x + " and " + y);

    z = parseInt(prompt("Please enter a number: "));
    if (z == 50) {
      alert("Thank you for your patience");
    } else {
      alert("Please enter 50 ");
    }
  } else {
    alert("You have entered 2 the first time but need to enter 5");
  }
} else {
  alert("You need to enter 2");
}

//Example2

// let username = prompt("Enter username: ");
// let password = prompt("Enter username: ");

// if (username != "" && password != "") {
//   if (username == "admin" && password == "admin123") alert("Login successful");
// } else {
//   alert("Login failed");
// }

//switch-case statement 1-2

// let choice = parseInt(prompt("Please enter a value from 1-5"));

// switch (choice) {
//   case 1:
//     alert("You have entered 1");
//     break;
//   case 2:
//     alert("You have entered 2");
//     break;
//   case 3:
//     alert("You have entered 3");
//     break;
//   case 4:
//     alert("You have entered 4");
//     break;
//   case 5:
//     alert("You have entered 5");
//     break;
//   default:
//     alert("You have entered a value not expected");
//     break;
// }

//Class work
//my version -  this is the first time i'm seeing (switch case statement)

// let grade = parseInt(
//   prompt("Enter your marks to determine your grade: 1-100: ")
// );

// switch (grade) {
//   case 90:
//     alert("You have a distinction");
//     break;
//   case grade > 60 && grade < 74:
//     alert("You have a credit");
//     break;
//   case grade < 0 && grade <= 50:
//     alert("You have a pass");
//     break;
//   default:
//     alert("You did not enter the write number");
//     break;
// }

//class work corrections

let mark = parseInt(prompt("Enter your marks to determine your grade: "));

switch (true) {
  case mark >= 90:
    alert("Your mark is " + mark + " and your grade is distinction");
    break;

  case mark > 74 && mark < 90:
    alert("Your mark is " + mark + " and your grade is credit");
    break;

  case mark > 59 && mark < 75:
    alert("Your mark is " + mark + " and your grade is pass");
    break;

  case mark <= 59:
    alert("Your mark is " + mark + " and your grade is fail");
    break;

  default:
    alert("Please enter the right thing");
}
