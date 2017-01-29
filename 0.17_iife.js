// IIFE - Immediately Invoked Functional Expressions

// Build a function that is called greeting - it accepts a name 
// and console logs "Hello" + name

// Functional Expression
var greeting = function(name) {
	console.log("Hello " + name);
}("Gary");



// build a function that takes two numbers and adds them together 
// and console logs the total.
var addNum = (function(numOne, numTwo) {
	console.log(numOne + numTwo);
})(1, 2);

