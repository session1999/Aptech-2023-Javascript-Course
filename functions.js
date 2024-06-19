//function declaration
function display() {
  alert("I am the display function");
}

// calling the function/ function invocation

display();

// // we have two types of functions
// // user defined and pre-defined

// // we also have two types of function

// //unparementalrized and paramentarized function

function addition() {
  let num1 = parseInt(prompt("Enter value one: "));
  let num2 = parseInt(prompt("Enter value two: "));

  result = num1 + num2;
  alert("The result of adding" + num1 + "and" + num2 + " = " + result);
}

addition();

//What is the parameterized version gonna look like

function addition2(valueone, valuetwo) {
  let result = valueone + valuetwo;
  alert("The result of adding" + valueone + "and" + valuetwo + " = " + result);
}

let valueone = parseInt(prompt("Enter value one: "));
let valuetwo = parseInt(prompt("Enter value two: "));

addition2(numone, numtwo);

//

function number(num1) {
  num1 += 20;
  console.log(num1);
}

val1 = 10;
number(val1);

//ways of passing arrays as argument
let names = new Array("James", "Kelvin", "Brad");

function displaynames() {
  document.write("<h1> List of Student Names </h1> ");
  document.write("<ul>");

  for (let i = 0; i < names.length; i++) {
    document.write("<li>" + names[i] + "</li>");
  }
  document.write("</ul>");
}

function changenames(cashapp) {
  cashapp[0] = "Stuart";
}

displaynames();
changenames(names);

document.write("<hr>");
document.write("<h2>These are the changes <h2>");

displaynames();

// for... in loop
document.write("<hr>");

let books = new Array(
  "Beginning CSS 3.0",
  " Introduction to HTML5",
  "HTML5 in Mobile Development"
);

document.write("<h3> List of Books </h3>");

for (let i in books) {
  document.write(books[i] + "<br/>");
}
