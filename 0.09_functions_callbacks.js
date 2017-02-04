// Callback function is a function that is passed
// to another function as a parameter.
// Callback function is called inside the other function.

// Example:
var allUserData = []; // global variable

function logStuff(userData) {
	if (typeof userData === "string") {
		console.log(userData);
	} else if (typeof userData === "object") {
		for (var item in userData) {
			console.log(item + ": " + userData[item]);
		}
	}
}

// A function that takes two parameters, the last one a callback function
function getInput(options, callback) {
	allUserData.push(options);
	callback(options);
}

// When we call the getInput function, we pass logStuff as a parameter.
// logStuff will be the function that will called back inside the getInput function
getInput({name:"Sam", job:"coder"}, logStuff);
