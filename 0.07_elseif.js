
var age = 24;

if (age >= 18 && age >=21 && age >= 25) {
	console.log("You can vote");
	console.log("You can drink");
	console.log("You can rent a car");
	
} else  if (age >= 21 || age >= 25) {
	console.log("You can vote");
	console.log("You can drink");

} else if (age >= 25) {
	console.log("You can rent a car");
} else {
	console.log("You cannot drink.");
}

// Challenge: 
//CHALLENGE: BRONZE
//expand upon our a simple login.
// create 2 variables 1 for your users username, 2 for the boolean condition then another to check if the user is an admin
// If login is true then print "You're Logged In!"
// If login is true and the user is a admin, print "This is the dashboard for your employee records you have master control"
// If Login is true and the user is a manager, print "This is the dashboard for your employee records, you can only read but not create users"
// If login is true and the user is a employee, print "clock in and clockout please" 
//Else if login is false then print "Please Sign In"

var username = "julie";
var isLoggedIn = false;
var isAdmin = false;
var isManager = false;
var isEmployee = false;

if (isLoggedIn) {
	console.log("You're Loggen In!");
	if (isAdmin) {
	console.log("This is the dashboard for your employee records you have master control.");
	} else if (isManager) {
	console.log("This is the dashboard for your employee records, you can only read but not create users");
	} else if (isEmployee) {
	console.log("clock in and clockout please");
	} 
} else {
	console.log("Please Sign In");
}



//CHALLENGE: SILVER
/*
Create an if statement that has several conditions.
 Pretend that we will play four total games next year against the patriots.
 Deal with the Patriots record versus our record In other words, if our record was better, 
 talk some smack. If not, you should still talk some smack, but in 
 a different way. If the records were the same, talk some smack. 
 
 */

 var recordColts = 3;
 var recordPatriots = 1;

 if (recordColts > recordPatriots) {
 	console.log("You need to deflate your ball better next time!");
 } else if (recordColts < recordPatriots) {
 	console.log("You still are a cheater!");
 } else {
 	console.log("We are not equal!")
 }

/*CHALLENGE: GOLD

1. Write a program that prompts your users in the browser to enter a
number from 1 to 5 about how optimistic they are about the Colts next year.
2. Have a different response for each number.

*HINT*
 you have to build this in relp.it 
Research prompt*/
