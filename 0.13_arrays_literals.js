// Array Literals
var empty = [];

var numbers = [
	"zero", "one", "two", "three", "four",
	"five", "six", "seven", "eight", "nine"
];

console.log(empty[1]);	// undefined
console.log(numbers[1]);	// "one"

console.log(empty.length);	// 0
console.log(numbers.length);	// 10

// JavaScript allows an array to contain any mixture of values
var misc = [
	"string", 98.6, true, false, null, undefined,
	["nested", "array"], {object: true}, NaN,
	Infinity
];

console.log(misc.length);	// 10 