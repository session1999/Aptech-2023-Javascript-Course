// Simple assignment operator (=)
// Used to assign whats on the right of the variable on the left

// // compound assignment operator
// // it is the usage of arithmetic and assignment operator togather

// //Example
const prompt = require("prompt-sync")({ sigint: true });
let number = parseInt(prompt("Enter a value: "));
const sum = 6;

sum += number; // sum = sum+number;
document.write("<br> the value of sum is: ", sum);

sum -= number; // sum = sum-number;
document.write("<br> the value of sum is: ", sum);

sum *= number; // sum = sum*number;
document.write("<br> the value of sum is: ", sum);

sum /= number; // sum = sum/number;
document.write("<br> the value of sum is: ", sum);

sum %= number; // sum = sum%number;
document.write("<br> the value of sum is: ", sum);

let result = sum + number; // sum = sum+number
document.write("<br> the value of sum is:" + result);

result = sum - number; // sum = sum-number
document.write("<br> the value of sum is:" + result);

result = sum * number; // sum * sum+number
document.write("<br> the value of sum is:" + result);

result = sum / number; // sum / sum+number
document.write("<br> the value of sum is:" + result);

result = sum % number; // sum % sum+number
document.write("<br> the value of sum is:" + result);

let age = parseInt(prompt("Enter age", 0));
let status = typeof age == "number" && age >= 18 ? "eligible" : "not eligible";
document.write(
  "You are " + age + " year old, so you are " + status + " to vote."
);

// // Operators precedence

let a = 40;
let b = 20;
let c = 45;
let d = 5;
let e = 125;

f = a + b * (c / d) - e;

console.log("The result of the expression is: ", f);

let number_add = 40;
let number_add2 = 90;
let number_add4 = 40;
let number_add3 = 9;
let number_add6 = 67;

number0 = number_add * number_add2 - number_add3 / number_add4 + number_add6;

document.write("This is home testing on operators ", number0);
