// Currying allows us to:
	 // produce new function by combining function and argument
	 // pass all of the arguments a function is expecting and get the results
	 // pass subset of those arguments and get a function back that's waiting
	 	// for the rest of the arguments	

// example of code with no curry:
var greet = function(greeting, name) {
  console.log(greeting + ", " + name);
};
greet("Hello", "Jeremy"); //"Hello, Jeremy"

// example of code with curry:
var greetCurried = function(greeting) {
  return function(name) {
    console.log(greeting + ", " + name);
  };
};

// different ways of using the curried function
var greetHello = greetCurried("Hello");
greetHello("Heidi"); //"Hello, Heidi"
greetHello("Eddie"); //"Hello, Eddie"

greetCurried("Hi there")("Howard"); //"Hi there, Howard"

// another example of curried function
var greetDeeplyCurried = function(greeting) {
  return function(separator) {
    return function(emphasis) {
      return function(name) {
        console.log(greeting + separator + name + emphasis);
      };
    };
  };
};

var greetAwkwardly = greetDeeplyCurried("Hello")("...")("?");
greetAwkwardly("Heidi"); //"Hello...Heidi?"
greetAwkwardly("Eddie"); //"Hello...Eddie?"

var sayHello = greetDeeplyCurried("Hello")(", ");
sayHello(".")("Heidi"); //"Hello, Heidi."
sayHello(".")("Eddie"); //"Hello, Eddie."