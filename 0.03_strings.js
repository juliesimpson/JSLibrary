var firstName = "Julie";
var message = firstName + ": " + 55;
console.log(typeof message); //typeof returns type of variable

//quotes? can use single or double quotes for strings
var lastName = 'Simpson';
var greetings = "How's your day?";
var greetings = 'Kenn says "How\'s your day?"'; //use forward slash (\) to let compiler know that code doesn't end there
console.log(greetings);

//string methods
console.log(greetings.length); //gives number of characters inside string including spaces
console.log(greetings.toUpperCase()); //changes to uppercase
console.log(greetings.toLowerCase()); //changes to lowercase
console.log(greetings.split(" ")); //add space to double quotes to turn string into array
console.log(greetings.slice(1)); //takes off the first letter; in this case 'k'

//Challenge: Strings
/*Challenge: Bronze
//Write a string that has two variables. Output should be something like this: 
I graduated from TooCoolForSchool High School in 1994.*/

var nameHighSchool = "Carmel High School";
var graduatedYear = "1988";

console.log("I graduated from " + nameHighSchool + " in " + graduatedYear + ".");

//Challenge: Silver
//Create one variable that holds a string that prints out three other variables. The three other //variables should be the make, model, and year of your car.
// “I drive a 1968 Chevy Impala.”

var makeOfCar = "Honda";
var modelOfCar = "CRV";
var yearOfCar = 2011;
var myCar = makeOfCar + modelOfCar + yearOfCar;

console.log("I drive a " + yearOfCar + " " + makeOfCar + " " + modelOfCar + ".");

//Challenge: Gold
//Create a variable called age. Give the age a value.
//Use a conditional to check the age.
//If the age is 18, console.log('You are an adult');
//If the age is less than 18, console.log('You are a minor');

var age = 19;

if (age >= 18) {
	console.log("You are an adult.");
}
else {
	console.log("You are a minor");
}



