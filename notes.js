
document.querySelector("header h2").append("and love")

// if i want to replace totally.

document.querySelector("header h2").textContent = "A game you know and like"

document.getElementById("p1-symbol").textContent = "x" 




let scrub = "guy that thinks he's fly";
scrub = "guy that can't get no love from me.";
let busta = scrub;

// here we get the result. ==> guy that can't get no love from me

// but if use string diffent order like

let scrub = "guy that thinks he's fly";
let busta = scrub;
scrub = "guy that can't get no love from me.";

// here the reuslt would be ==> guy that think he's fly.



// AN expression "asks" js for value
myAssigendVariable
6 + 4
document.getElementById("board")


// A statement "tells" js to do something. (e.g declare/assign a variable)
let ten = 6 + 4;
myDeclaredVariable = "new value";
let board = document.getElementById("board");



// array : try these 

["c","a","d","b"].sort()  // it would sort out the elements

["lions","tiger","bears oh my!"].join(" & ")  /// it would give you complet string/ like lions & tiger & bear oh my

[1, 2, 3].concat([4, 5, 6]) // it add in one array i think




// Do these do the same thing ?

let abcArray = ["a","b","c"];
abcArray[1] = "d";
abcArray;

// result would be : [a , d ,c]

let abcString = "abc";
abcString[1] = "d";
abcString; 

// abcstring[1] : would be ingnored, becsue let abcString in not array/



// do these do the same thing

let number1 = [1, 3, 5];
let result1 = number1.push(4);
number1;
// here the reuslt would be  [1, 3, 5, 4]    

let numbers2 = [1, 2, 3];
let result2 = numbers.concat([4]);
numbers2 
// here it will create new nested array here 


// immutable variable with mutable value 

// what happens when we use const with a mutable value like an array ?

const operands = [ 4, 6];
const sum = operands[0] + operands[1];

operands[0] = 5;   // it will assing new value to array.
const newSum = operands[0] + operands[1];









