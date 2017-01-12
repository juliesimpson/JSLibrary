//this is how to create a JS array
//array is a collection of data

var names = ["paul", "gavin", "verne", "lisa", "kenn"];
var nums = [1, 2, 3, 4, 5, 6, 4501]; 
var mixed = ["dog", false, 6, "squirrel", 2]; //unique to JS to mix types in array
console.log(names[2]);
console.log(nums[6]);
console.log(mixed[3]);
console.log(names);

//can we use a for in loop to iterate and console log each name in nanes
for (var name in names) {
	console.log(names[name]);
}

//create an array of favorite candy bars
var favCandyBars = ["snickers", "reeses", "mounds", "twix"];
console.log(favCandyBars);

//method to add value to end of array
favCandyBars.push("heath");
console.log(favCandyBars);

//method to remove value from end of array
favCandyBars.pop();
console.log(favCandyBars);
console.log(favCandyBars.slice(0,3)); //just truncates the view but not changing the actual array; returns value up to the last number
console.log(favCandyBars);

//how to remove a specific element of an array
//.indexOf will return the index of where a value is located in the array
//.spice will allow us to remove (and the change) the item
console.log(favCandyBars.indexOf("snickers"));
favCandyBars.splice(0,1);
console.log(favCandyBars);
