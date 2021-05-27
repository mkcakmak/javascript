/*
let js = "amazing";
if (js === "amazing") alert("JavaScript is FUN!");
40 + 8 + 23 - 10;
console.log(40 + 8 + 23 - 10);
console.log("23");

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);
console.log(firstName);

let PI = 3.14;
console.log(PI);

let myFirstJob = "Security Analyst";
let myCurrentJob = "coder";
console.log(myFirstJob);
console.log(myCurrentJob);
*/

// DATATYPES

/*
true;
console.log(true);
let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof true);
console.log(typeof 23);
console.log(typeof javascriptIsFun);
console.log(typeof "Jonas");

javascriptIsFun = "YES!";
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1987;
console.log(year);
console.log(typeof year);

console.log(typeof null);

*/

// Declaring Variable

/*
let age = 30;
age = 31;
console.log(age);

const birthYear = 1987;
//birthYear = 1989;

//const job;

var job = "lawyer";
job = "programmer";
console.log(job);

lastName = "Cakmak";
console.log(lastName);
*/

// BASIC OPERATORS

//Math Operators

/*
const now = 2037;
const ageMuhammed = now - 1987;
const ageSarah = now - 2004;
console.log(ageMuhammed, ageSarah);

console.log(ageMuhammed * 2, ageSarah / 7, 2 ** 3);
// 2**3 means => 2*2*2

let firstName = "Muhammed Kazim";
let lastName = "Cakmak";
console.log(firstName + " " + lastName);

//Assignments Operators

let x = 10 + 5; // 10
x += 10; // x = x+10  25
x *= 4; // x= x*4     100
x++; // x = x+1       101
x--; // x = x-1       100
x--; //               99
console.log(x);

//Comparison Operators

console.log(ageMuhammed > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 34);

const isFullAge = ageSarah >= 34;

console.log(now - 1987 > now - 2004);

*/

// OPERATOR PRECEDENCE

const now = 2037;
const ageMuhammed = now - 1987;
const ageSarah = now - 2004;

console.log(now - 1987 > now - 2004);

console.log(25 - 10 - 5);

let x, y;

x = y = 25 - 10 - 5; // x = y = 10
console.log(x, y);

const averageAge = (ageMuhammed + ageSarah) / 2;
console.log(ageMuhammed, ageSarah, averageAge);
