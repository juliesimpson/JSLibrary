// Recursive function calls itself, directly or indirectly
var countdown = function(value) {
	if (value > 0) {
		console.log(value);
		return countdown(value - 1);
	} else {
		return value;
	}
};

countdown(10);

var factorial = function(number) {
	if (number <=0) {
		return 1;
	}else {
		return (number * factorial(number - 1));
	}
};

console.log(factorial(6));