var tired = false;
var hungry = true;

// '=' assignment operator; '==' is equal to, evaluates value (returns true or false); '===' compare data type and content
var isTrue = 1 == 1; 
console.log(isTrue);

// Operator 	Meaning
// ==			Equality
// ===			Strict equality
// !=			Inequality 
// !==			Strict inequality
// >			Greater than
// >=			Greater than or equal
// <			Less than
// <=			Less than or equal

//! is a bang symbol means "not"
//you can put '!' in front of a variable also ie var foo = true; console.log(!foo)

//Challenge: Boolean Logic
/*CHALLENGE: Bronze
Create 5 boolean variables that would be used in everyday programming
Using the boolean variables created above integrate logical and comparison operators to return true and false statements in the console.
*/

var hasCollegeDegree = True;
var hasHighSchoolDegree = True;
var yourAge = 16;
var yourAgeGraduatedHighShool = 18;
var yourAgeGraduatedCollege = 22;

console.log(hasCollegeDegree == hasHighSchoolDegree);
console.log(yourAge > 18);
console.log(yourAgeGraduatedHighShool != yourAgeGraduatedCollege);

/*CHALLENGE: Silver
Write your own conditional that deals with Boolean Operators and Boolean Logic. Get as complicated as you want, just make sure it runs. Sign up for an account on Repl.io. Add the code there and send it to James, Paul, and Kenn. You can do that on Slack by using the @ symbol for all of us.
*/

if (hasHighSchoolDegree == True) {
	console.log("You can apply to a college of your choice!");
}
if else (hasHighSchoolDegree && hasCollegeDegree) {
	console.log("You can go find a job!");

}
else {
	console.log()
}

/*CHALLENGE: Gold 
I want to order some Colts gear online(Jona, go ahead with the Bengals(boo)), and I'm not sure 
which courier service to use yet. I want to know which one to use
for Next Day Air, 2 day air, 3 day ground, and whenever. Can you write
an if/else statement that helps me pick the best one? It's just your opinion here.
*/

