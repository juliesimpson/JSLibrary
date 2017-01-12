/*console.log("hello world");
console.log("hello world");
console.log("hello world");
console.log("hello world");
console.log("hello world");*/

// 'function' function name() {} 
//function without parameters
function hello() {
	console.log("Hello World");
}

// You have to call the function
hello();

function greeting() {
	console.log("Good morning Morgan");
}

greeting();

//adding number to functions
function printNumber() {
	console.log(1);
}

printNumber();

function sumNum() {
	var num1 = 4;
	var num2 = 6;
	console.log(num2 + num1);
}

sumNum();

function multipyNum() {
	var num1 = 2;
	var num2 = 3;
	console.log(num1 * num2);
}

multipyNum();

function divideNum() {
	var num1 = 2;
	var num2 = 3;
	console.log(num1 / num2);
}

divideNum();

function subtractNum() {
	var num1 = 3;
	var num2 = 2;
	console.log(num1 - num2);
}

subtractNum();

//function with parameters: parameters are in parenthesis when create function
//functions use 'return' to return values
//when calling the function: arguments are in parenthesis 


function greeting(name) {
	return "Good morning " + name;
}

greeting("Julie");

var addGreeting = greeting("Julie") + ", how are you doing today";

console.log(addGreeting);

function sumNum(num1, num2) {
	return num1 + num2;
}

console.log(sumNum(2, 3));

function multipyNum(num1, num2) {
	return num1 * num2;
}

console.log(multipyNum(2, 3));

function divideNum(num1, num2) {
	return num1 / num2;
}

console.log(divideNum(6, 3));

function subtractNum(num1, num2) {
	return num1 - num2;
}

console.log(subtractNum(6, 3));

function calculatePriceIndiana(quantity, price) {
	var tax = 0.07;
	var totaltax = quantity * price * tax;
	var totalPrice = totaltax + quantity * price;

	return totalPrice;
}

console.log(calculatePriceIndiana(17, 5));

//There are built-in functions

var today = Date();
console.log(today);

//built-in Objects

var today = new Date();
console.log(today.toDateString());

function checkOdd(num) {
	if (num % 2 === 0) {
		return num + " is even.";
	} else {
		return num + " is odd."
	}

}

console.log(checkOdd(12));

function divByThree(num) {
	if (num % 3 === 0) {
		return num + " is divisible by 3."
	} else {
		return num + " is not divisible by 3."
	}
}
console.log(divByThree(12));

function greeting(name) {
	if (name == "Joe") {
		return "Good morning " + name;
	} else {
		return "Do your homework " + name;
	} 
}
console.log(greeting("Joe"));

// Challenge: Functions

/*Write a function with two strings as parameters.
		The function should concatenate the string.*/

function concatenateStrings(firstname, lastname) {
	return firstname + " " + lastname;
}		
console.log(concatenateStrings("Julie", "Simpson"));


//Write a function that will help me easily calculate monthly bills.

function calculateMonthlyBills(electric, phone) {
	var monthlyBills = electric + phone;
	return monthlyBills;
}
console.log(calculateMonthlyBills(100, 200));


/*Write a function that takes quantity, price, tax and an item
The function should take the quantity, price, tax and the item name and return
a response similar to this.
--150 hotdogs will cost you $145 (your math may not be perfect and may
 potentially return 145.457.  If that is the case, don’t sweat it.*/

function calculateTotalCost(quantity, price, tax, item) {
	var calcCost = quantity * price * tax;
	return calcCost;
}
//var displayItemCost = quantity + " " + item + " will cost you $" + calculateTotalCost(3, 2, 0.07, "hotdogs");
console.log(quantity + " " + item + " will cost you $" + calculateTotalCost(3, 2, 0.07, "hotdogs"));

