//Single dimentional array declaration and initialization

var names = [
  "Aiye",
  " Black Jeff",
  "Casmir",
  "Freda",
  "Daniel",
  "Dapo",
  "Deji",
  "Obed",
  "Wisdom",
];

alert(names);

alert(names[1]);

//array declaration

let fruits;

fruits = new Array(5);

//array initialization

fruits[0] = "Mango";
fruits[1] = "Cashew";
fruits[2] = "Apple";
fruits[3] = "Soursop";
fruits[4] = "Coconut";

alert(fruits[5 - 1]);

//Using for loop inside an array

document.write("<h1> The List of Fruits</h1>");
document.write("<ol>");

for (let i = 0; i < fruits.length; i++) {
  document.write("<li>" + fruits[i] + "</li>");
}
document.write("</ol>");

// Using While Loop

// document.write("<h1> The List of Fruits</h1>");
// document.write("<ol>");

// let i = 0;
// while (i < fruits.length) {
//   document.write("<li>" + fruits[i] + "</li>");
//   i++;
// }
// document.write("</ol>");

// sum of with forEach

// let numbers = [50, 30, 40, 40];

// let sum = 0;

// numbers.forEach((item) => {
//   sum += item;
//   console.log(sum);
// });

//write a simple array that accepts and stores the marks of 10 subjects and returns the sum
// SUM OF ALL NUMBERS AND TAKING INPUT FROM USER

let sum = 0;

let marks = new Array(10);

for (i = 0; i < marks.length; i++) {
  marks[i] = parseInt(prompt("Enter marks", i));

  document.write(i + "marks =" + marks[i] + "<br>");

  sum += marks[i];
}
document.write("The total sum of all marks is", +sum);

// The average sum of all numbers

let average = sum / marks.length;

document.write("<br> The average of the total marks entered is " + average);
