//classwork

// (1) write a javascript program that find the maxim=um element in an array of 20 elements

let arr = [1, 15, 2, 3, 4, 49, 12];

maxNum = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > maxNum) {
    maxNum = arr[i];
  }
}

console.log(maxNum);

// (2) write a javascript program that filters even numbers from another array and add them into another new array

// (3) write a javascript that takes a string and number and repeats the strings as many times as the number entered // HINT - you need function
