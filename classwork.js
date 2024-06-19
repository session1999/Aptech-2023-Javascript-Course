// write a javascript program that finds the maximum value in a array

let max = 5;
let i = "";
let array = new Array();

// Populate your array
for (i = 1; i <= max; i++) {
  array[i] = prompt("Enter " + i + " of " + max + " numbers to find the max: ");
}

// Sort the array in descending order
// basically pass in an anonymous function to determine sort order
array.sort(function (a, b) {
  return b - a;
});

// After sorting, the first element of the array contains your max value
let determined_max = array[0];

alert("your highest number is " + determined_max);

// write a javascript program that creates an array with odd numbers that are smaller
//than 10

//Note - for the number 2 there must be usage of loops
