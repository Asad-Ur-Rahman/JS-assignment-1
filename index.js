// ***********************************************

// Q-1 Write a JavaScript program that accepts two numbers in two prompts and displays the larger one in the console.

let num1 = +prompt("Enter first number: ");
let num2 = +prompt("Enter second number: ");

if (num1 > num2) {
    console.log(num1);
}
else {
    console.log(num2);
}

console.log('\n');

// ***********************************************

// Q-2 Write a JavaScript conditional statement to find the sign of a number. Display an alert box with the specified sign

let signNum = +prompt("Enter a number to check the sign: ");

if (signNum > 0) {
    console.log("The sign is +");
}
else {
    console.log("The sign is -");
}

console.log('\n');

// ***********************************************

// Q-3 Write a JavaScript program that accepts five numbers in five prompts and displays the larger one in the console

let ip1 = +prompt("Enter first number:");
let ip2 = +prompt("Enter second number:");
let ip3 = +prompt("Enter third number:");
let ip4 = +prompt("Enter fourth number:");
let ip5 = +prompt("Enter fifth number:");

if (ip1 > ip2 && ip1 > ip3 && ip1 > ip4 && ip1 > ip5) {
    console.log(ip1);
}
else if (ip2 > ip1 && ip2 > ip3 && ip2 > ip4 && ip2 > ip5) {
    console.log(ip2);
}
else if (ip3 > ip1 && ip3 > ip2 && ip3 > ip4 && ip3 > ip5) {
    console.log(ip3)
}
else if (ip4 > ip1 && ip4 > ip2 && ip4 > ip3 && ip4 > ip5) {
    console.log(ip4)
}
else {
    console.log(ip5)
}

console.log('\n');

// ***********************************************

// Q-4 Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.

for (let i = 0; i < 16; i++) {
    if (i % 2 === 0) {
        console.log(`${i} is even`);
    }
    else {
        console.log(`${i} is odd`)
    }
}

console.log('\n');

// ***********************************************

// Q-5 Write a JavaScript program which computes the average marks of the following students Then, this average is used to determine the corresponding grade.

let marks1 = +prompt("Enter number of maths: ");
let marks2 = +prompt("Enter number of physics: ");
let marks3 = +prompt("Enter number of computer: ");
let marks4 = +prompt("Enter number of pak studies: ");
let marks5 = +prompt("Enter number of Islamiat: ");

avg = (marks1 + marks2 + marks3 + marks4 + marks5) / 5

console.log(`Obtained marks ${avg}`)

if (avg > 90 && avg <= 100) {
    console.log("Grade is A")
}
else if (avg > 80 && avg <= 90) {
    console.log("Grade is B")
}
else if (avg > 70 && avg <= 80) {
    console.log("Grade is C")
}
else if (avg > 60 && avg <= 70) {
    console.log("Grade is D")
}
else {
    console.log("Grade is F")
}

console.log('\n');

// ***********************************************

// Q-6 Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz"

for (let i = 1; i < 101; i++) {
    if (i % 3 === 0 && i % 5 == 0) {
        console.log("FizzBuzz");
    }
    else if (i % 3 === 0) {
        console.log("Fizz");
    }
    else if (i % 5 === 0) {
        console.log("Buzz");
    }
}

console.log('\n');

// **********************************************

// Q-7 Write a JavaScript program to construct the following pattern, using a nested for loop.

// *
// * *
// * * *
// * * * *
// * * * * *

let str = '';

for (let i = 0; i < 5; i++) {
    for (let j = 0; j <= i; j++) {
        str += '*';
    }
    console.log(str);
    str = '';
}