// Arguments array : gives functions access to all of the arguments 
//					 makes it possible to write functions that take unspecified number of parameters

// Make a function that adds a lot of stuff
// Note that defining variable 'sum' inside of 
// the function does not interfere with the sum 
// defined outside of the function. 
// The function only sees the inner one.

var sum = function() {
	var i, sum = 0;
	for (i = 0; i < arguments.length; i++) {
		sum += arguments[i];
	}
	return sum;
};

console.log(sum(4, 8, 15, 16, 23, 42));
