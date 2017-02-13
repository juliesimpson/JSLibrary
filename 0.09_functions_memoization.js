// Memoization : when functions use objects to remember
// 	the results of previous operations.

// Fibonacci number generator example:
function fibonacci(n) {
	if (n === 0 || n === 1) {
		return n;
	} else {
		return fibonacci(n - 1) + fibonacci(n - 2);
	};

};

for (var i = 0; i <= 10; i += 1) {
	console.log(i + ": " + fibonacci(i));
};

// Memoization example:
var fibonacci = function() {
	var memo = [0, 1];
	var fib = function(n) {
		var result = memo[n];
		if (typeof result !== "number") {
			result = fib(n - 1) + fib(n - 2);
			memo[n] = result;
		}
		return result;
	};
	return fib;
}();