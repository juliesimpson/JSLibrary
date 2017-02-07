// Module : function or object that presents an interface
// that hides its state and implementation.

// Modules divide programs into clusters of code that by 
// some criterion belong together.

// Using functions to produce modules can almost completely
// eliminate use of global variables.

// example:
var dayName = function() {
	var names = ["Sunday", "Monday", "Tuesday", "Wednesday",
				 "Thursday", "Friday", "Saturday"];
	return function(number) {
		return names[number];
	};			 
}();

console.log(dayName(3));

// example:
(function() {
	function square(x) {return x * x}
	var hundred = 100;

	console.log(square(hundred));	
})();

// example:
var weekDay = function() {
	var names = ["Sunday", "Monday", "Tuesday", "Wednesday",
				 "Thursday", "Friday", "Saturday"];
	return {
		name: function(number) {return names[number];},
		number: function(name) {return names.indexOf(name);}
	};			 	
}();

console.log(weekDay.name(weekDay.number("Sunday")));