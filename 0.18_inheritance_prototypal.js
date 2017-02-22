// Prototypical inheritance: new object can inherit properties of old object.

// Using object literal to make a useful object:
var myMammal = {
	name: "Herb the Mammal",
	get_name: function() {
		return this.name;
	},
	says: function() {
		return this.saying || "";
	}
}; 

// New instances of object:
var myCat = Object.create(myMammal);
myCat.name = "Henrietta";
myCat.saying = "meow";
myCat.purr = function(n) {
	var i, s = "";
	for (i = 0; i < n; i += 1) {
		if (s) {
			s += "r";
		}
		return s;
	};
	myCat.get_name = function() {
		return this.says() + " " + this.name + " " + this.says();
	};

}