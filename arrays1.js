// alert("Arrays");
// //Single dimen arrays

// //Array creation

// let names = ['Aiye', 'Freda', 'Legend', 'Pacho', 'Wisdom', 'Chima'];

// alert(typeof(names));

// var fruits = new Array(7);
// fruits[0] = "Oranges";
// fruits[1] = "Coconut";
// fruits[2] = "Water Melon";
// fruits[3] = "Bananas";
// fruits[4] = "Grapes";
// fruits[5] = "Mangoes";
// fruits[6] = "Apples";

// alert(fruits)

var first_four = new Array(
  "Tottenham",
  "Arsenal",
  "Manchester City",
  "Liverpool"
);

alert(first_four);

//traversing throught the array using for loop

for (let i = 0; i < first_four.length; i++) {
  document.write(first_four[i]);
  document.write("<br>");
}

document.write("<h1> Fruit List</h1>");

for (let i = 0; i < fruits.length; i++) {
  document.write(fruits[i]);
  document.write("<br>");
}

// //Multi-dimensional arrays

// //2d arrays

var fullname = new Array(6);

fullname[0] = new Array("Freda", "Jane");
fullname[1] = new Array("Aiye", "Johnson");
fullname[2] = new Array("Wisdom", "Doe");
fullname[3] = new Array("Mayor", "Pacho");
fullname[4] = new Array("Dapo", "Legend");
fullname[5] = new Array(" ", " ");

alert(fullname);
alert(
  "The full name of the second person in the 2d array is" +
    fullname[1][0] +
    " " +
    fullname[1][1]
);

document.write("<BR>");
//How do we traverse the array using for loops

for (let i = 0; i < fullname.length; i++) {
  for (let j = 0; j < 2; j++) {
    document.write(fullname[i][j]);
    document.write(" ");
  }
  document.write("<br>");
}

document.write("<hr>");

for (let i = 0; i < fullname.length; i++) {
  for (let j = 0; j < fullname[i].length; j++) {
    document.write(fullname[i][j]);
    document.write(" ");
  }
  document.write("<br>");
}

//Example

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    document.write(matrix[i][j]);
    document.write(",");
  }
  document.write("<br>");
}
