// if/else

var elevatorUp = true;
var elevatorDown = true;
var elevatorOpen = true;
var elevatorBroken= true;
var elevatorStuckAndWeAreOnIt = true;
var elevatorNumber = 13;

if (elevatorUp === true) {
	console.log("Going up");
} else {
	console.log("Going down");
}

// write one for elevator broken:
if (elevatorBroken) {
	console.log("You are stuck!");
} else {
	console.log("Which floor would you like to go?");
}

if (elevatorStuckAndWeAreOnIt) {
	console.log("Oh no. I have to go to the bathroom, too");
} else {
	console.log("This is a really nice elevator");
}

// Challenge: If/Else Statements

//CHALLENGE: Bronze

//WRITE YOUR OWN CONDITIONAL USING BOOLEANS AND LOGICAL OPERATORS.
//Come up with a simple example

var notEnoughSleep = true;
var notEnoughFood = true;
var isTired = true;
var isHungry = true;

if (notEnoughSleep && isTired) {
	console.log("You need to go to bed earlier!");
} else {
	console.log("You should be well rested to begin the day!");
}

//Challenge: Silver
//Create a simple login console message.
// create 2 variables 1 for your users firstName, 2 for the boolean condition
// If login is true then print "You're Logged In!"
//Else if login is false then print "Please Sign In"

var firstName = "Julie";
var isLoggedIn = true;

if (isLoggedIn) {
	console.log("You're Logged In!");
} else {
	console.log("Please Sign In");
}


//CHALLEGE: Gold
//Set up a var with bankAccount and a var with debt.
//Also set up a difference var.
//Do some logic to show whether or not you will pay off your debt or prints out a message if you have extra money.

var bankAccount = 200;
var yourDebt = 500;
var owedDebt = bankAccount - yourDebt;

if (bankAccount > yourDebt) {
	console.log("You have extra money!");
} else {
	console.log("You will have to pay off your debt! You owe $" + owedDebt);
}