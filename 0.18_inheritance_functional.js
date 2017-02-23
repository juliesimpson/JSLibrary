// Functional Inheritance:
// 1. It creates new object
// 2. It optionally defines private instance variables and methods
// 3. It augments that new object with methods
// 4. It returns that new object
// 5. Creates new functions every time a constructor function is called

// Example:
// validator.js
module.exports = function() {
	var rules = [], my = {};

	my.addRule = function(rule) {
		rules.push(rule);
	};

	return my;
};

// specificValidator.js
var validator = require('...').validator;

var specificValidator = function() {
	var my = validator();

	my.filter = function(instance) {
		...
	};

	return my;
};

// client.js
var validator = specificValidator();

// calls function on derived object
validator.filter({...});

// calls function on base object
validator.validate({...});
