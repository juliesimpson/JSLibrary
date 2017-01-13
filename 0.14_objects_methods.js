// OBJECT LITERALS WITH METHODS
// Functions inside of an object.

var player = {
	//Properties
	name	: 	"",
	life	: 	100,
	damage	:  50, 	//going to Methods from Properties needs a comma
	hasSword: true,

	//Methods
	challenge: function() {
		console.log(this.name + " says: Would anyone care to fight????"); //use of 'this'

	},   			//you need commas between methods

	response: function() {
		console.log(this.name + " says: Yes, I would like to fight!");
	},

	attack: function(target) {
		console.log(this.name + " throws the fist at " + target.name " and does " + this.damage + " damage!");
	}
}

var melkor = Object.create(player);
melkor.name = "Melkor";
 
var miley = Object.create(player);
miley.name = "Miley";

// Access Methods
melkor.challenge();
miley.challenge();
melkor.response();
miley.response();
melkor.attack(miley.name);

