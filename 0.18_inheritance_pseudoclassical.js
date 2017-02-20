// Pseudoclassical Inheritance : uses constructor function and 'new' operator
// 	to create objects, and uses 'prototype' property to build inheritance chain.

// Constructor function
function Point(x,y) {
	this.x = x || 0;
	this.y = y || 0;
}

// method to the 'prototype' property of Point
Point.prototype.add = function() {
	return this.x + this.y;
};

// 'new' operator to create objects
var p = new Point(3, 4);

console.log(p instanceof Point);	// console logs 'true'
console.log(p.add());	// console logs '7'
