// JSON is an acronym for JavaScript Object Notation
// Nested Arrays
var names = [["James", "Paul", "Cameron", "Chris"], ["Morgan", "Julie", "Abbey", "Brie"]];
//console.log(names[0][0]);
var items = [
	{
		"id": 1,
		"name": "Green Door",
		"price": 12.50,
		"tags": ["home", "green", "vinyl"]
	},
	// use different id's
	{
		"id": 2,
		"name": "Red Door",
		"price": 12.50,
		"tags": ["home", "red", "cheap wood"]
	},
	{
		"id": 3,
		"name": "Blue Door",
		"price": 12.50,
		"tags": ["home", "blue", "wood"]
	},
	{
		"id": 4,
		"name": "Yellow Door",
		"price": 12.50,
		"tags": ["home", "yellow", "vinyl"]
	}
];

console.log(items[0].id);
console.log(items[0].tags);
console.log(items[0].tags[1]);

// create a for loop that console.log each object name
for (i=0; i<items.length; i++) {
	console.log(items[i].name);
}

