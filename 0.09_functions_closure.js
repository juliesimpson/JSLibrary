// Closures are functions that refer to indenpendent(free)
// variables(variables that used locally, but defined in
// an enclosing scope.)

// These functions 'remember' the environment in which they
// were created.

// They have access to the parent scope, even after
// the parent function has closed.

// Example:
var add = function () {
	
	for (var counter = 0; counter <=5; counter ++) {
		console.log(counter);
	};
};

add();

// Example:
function sayHello(name){
	var text = "Hello " + name;  // local variable
	var say = function () {
		console.log(text);
	}
	return say;
}
var say2 = sayHello("Sam");
say2();
