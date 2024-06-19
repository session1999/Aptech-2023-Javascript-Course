//Classwork

var car_details = new Object();

car_details.model = "Corolla";
car_details.year = 2004;
car_details.engineType = "v12";
car_details.color = "Red";
car_details.make = "Toyota";

car_details.displaydetails = function () {
  document.write("car's model: " + car_details.model + "<br>");
  document.write("car year: " + car_details.year + "<br>");
  document.write("car engineType: " + car_details.engineType + "<br>");
  document.write("Car color: " + car_details.color);
};

car_details.message = function () {
  document.write(
    "This " +
      car_details.year +
      " " +
      car_details.make +
      " " +
      car_details.model +
      " is " +
      car_details.color +
      "<br>"
  );
};

car_details.changeColor = function () {
  car_details.color = prompt("Please enter your color: ");
  document.write(" The new color of your car is " + car_details.color + "<br>");
};

car_details.changeColor();

// function car_details(model, age, color) {
//   this.model = model;
//   this.age = age;
//   this.color = color;
//   this.displaydetails = function () {
//     document.write("Car model: " + this.model + "<br>");
//     document.write("Car age: " + this.age + "<br>");
//     document.write(
//       "Car color: " + this.color + "This 2004 toyota corolla is red"
//     );
//   };
// }

//car_details.displaydetails();
