// "apply" method:
// 		lets us construct an array of arguments to use to invoke a function
// 		lets us choose the value of this
//		takes two parameters: 	1st is value that should be bound to "this"
//								2nd is array of parameters

// Make an array of 2 numbers and add them
var add = function (a, b) {
	return a + b;
};

var array = [3, 4];
var sum = add.apply(null, array);
console.log(sum);				

	
