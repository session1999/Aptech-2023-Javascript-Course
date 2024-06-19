let number = parseInt(prompt("Enter a number: "));
alert(number);

number = parseInt("3.142");
alert(number);

let name = ["Casmir", "Aiye", "Wisdom"];
let fruits = new Array();

/* There are two ways of creating user defined objects
1. Direct method
2. Template method
*/

// Direct Method

// Instantiation of the doctor_details object
// var doctor_details = new Object();

// Declaration and initialization of properties of the doctor_details object

doctor_details.name = "Dr. Jesus Joenas;";
doctor_details.age = 67;
doctor_details.specialization = "Chief Medical Director";
doctor_details.salary = 999999;

doctor_details.displaydetails = function () {
  document.write("Doctor's name: " + doctor_details.name + "<br>");
  document.write("Doctor's age: " + doctor_details.age + "<br>");
  document.write(
    "Doctor's specialization: " + doctor_details.specialization + "<br>"
  );
  document.write("Doctor's salary: " + doctor_details.salary);
};

doctor_details.displaydetails();

function doctor_details(name, age, specialization, salary) {
  this.name = name;
  this.age = age;
  this.specialization = specialization;
  this.salary = salary;
  this.displaydetails = function () {
    document.write("Doctor's name: " + this.name + "<br>");
    document.write("Doctor's age: " + this.age + "<br>");
    document.write("Doctor's specialization: " + this.specialization + "<br>");
    document.write("Doctor's salary: " + this.salary);
  };
}

let empdetail = new doctor_details();
empdetail.name = "Wisdom";
empdetail.age = 89;
empdetail.salary = 1000000000;
empdetail.specialization = "Gynaecologist";
empdetail.displaydetails();
document.write("<br> <hr>");

let empdetail1 = new doctor_details();
empdetail1.name = "Mayor";
empdetail1.age = 120;
empdetail1.salary = 50000000;
empdetail1.specialization = "Peadatrician";
empdetail1.displaydetails();

document.write("<br> <hr>");
var empdetail2 = new doctor_details("Freda", "32", "Dentist", 100000);
empdetail2.displaydetails();

//Built in-objects

//String Object

//The string object in javascript helps us to manage string operation with its properties and methods

//properties
//length property

let userName = new String("Casmir Adumekwe");

let middleName = new String("Wisdom");

alert(userName.length);

// // methods
// //charAt

alert(userName.charAt(1));

alert(userName.concat(middleName));

let fullname = userName.concat(middleName);

alert(fullname);

//indexOf

let position = userName.indexOf("a");

alert(position);

alert(fullname.toUpperCase());
alert(fullname.toLowerCase());

//math object

// the math object in javascript is used to perform mathematical operations with the aid of its properties and methods

let pi = Math.PI;

// the programe below calculates the area of a circle

let r = parseInt(prompt("Please enter the radius of a circle: "));

let area = 2 * pi * r * r;

alert(area);

//Other math methods
//The floor methods is to round down a number to the nearest integar
let number1 = 3.142;

let floorNumber = Math.floor(number1);

alert(floorNumber);

//round object
// rounds it to the nearest integar number

number = 3.999;

let roundNumber = Math.round(number);

alert(roundNumber);

// // Ceiling method
// //The ceiling method round the number to the nearest high number
number = 3.999;

let ceilingNumber = Math.ceil(number);

alert(ceilingNumber);

// // Squareroot method

number = 25;

let sqrtValue = Math.sqrt(number);

alert(sqrtValue);

//Power Method
//Power Method is used to raise a number to a specific power

let baseNumber = 5;
let exponNumber = 3;
let result = Math.pow(baseNumber, exponNumber);

alert(result);

// //Absolute(abs) method
// //This method returns the absolute value of a number

number = -250;

let absNumber = Math.abs(number);

alert(absNumber);

// //radom number
// //This methid return a random floating-pout number between 0 and 1
// //But can be tweaked to return more random above that.

let randonNumber = Math.random();

alert(randonNumber);

//Date Object

function display_date() {
  let today = new Date();
  let date = today.getDate();
  let month = today.getMonth();
  month++;

  let year = today.getFullYear();
  alert('Today"s date is: ' + month + "/" + date + "/" + year);
}

display_date();

// with javascript date object we can access its medthod and properties

//Properties
//The getFullYear() - This returns the year of the date

let today = new Date();
let year = today.getFullYear();

alert(year);

//Getmonth
//This returns the month of the date

let month = today.getMonth();
alert("The date is " + month);

//getDay
//This returns the day of the week

dayOfWeek = today.getDay();
alert("The day of week is " + dayOfWeek);

//Date methods
//The date methods are used for Date operations

//toString() method
// the toString method is used to convert a date to string

let datestring = today.toString();

alert(datestring);

//Settime (milliseconds) method
//This set the time of the date object

today.setTime(10);
alert(today.toString());

//toISOString() method
//This converts tthis to the ISO 8601 string

let isoString = today.toISOString();
alert(isoString);

//Date.now() method
//Returns the current timestamp in milliseconds

let currentTime = Date.now();

alert(currentTime);
