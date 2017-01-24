// Create a constructor function called Quo.
// It makes an object with a status property.

var Quo = function(string) {
	this.status = string;
};

// Give all instances of Quo a public method called get_status

Quo.prototype.get_status = function() {
	return this.status;
};

// Make an instance of Quo

var myQuo = new Quo("confused");

console.log(myQuo.get_status());

// Functions that are intended to be used with the "new" prefix are called constructors.
// By convention, they are kept in variables with a capitalized name.
// Use of this style of constructor functions is not recommended.