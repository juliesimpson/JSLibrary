//this variable is a string
var firstname = "julie";
var lastname = "simpson";
var fullname = firstname + " " + lastname; //build algorithm to make it simpler than putting it in console log
console.log(fullname);
//console.log(firstname + " " + lastname); //concatenation is where you can build or combine strings

//empty variables
var num
//console.log(num); //returns undefined

num = 2
console.log(num);

//empty strings

var petsName = ""; //camel case style
petsName = "gus";
console.log(petsName);

/*let //new way and secure way of naming variable for local variables
if (true) {
	let petsName = ""
}*/
//short hand operators
var age = 55;

console.log(age += 1); // age = age + 1
console.log(age /= 2);

//var 2nite = "Wednesday Night"; //cannot start variable naming with integer
//avoid using reserved words to name variable

// -------------- Challenge: Variables-----------
/*CHALLENGE: Bronze
Come up with five different variables. Think of 
real world uses for integers and create variables based on 
those things. A few examples might include: 

var myBankAccount = 2000000; //No dollar sign, we'll discuss how to add this later.
var numberOfHotDogsKobyashiAte = 39; //Check this stat. Not that's how many he ate.

console.log(myBankAccount);
console.log("Kobyashi:" + numberOfHotDogsKobyashiAte); /* <----String concatenation

/*-----------------------------------------------------------*/

var myBankAccountNumber = 105010;
var myAccountBalance = 500;
var myAccountDeposit = 100;
var myAccountWithdrawal = 200;
var myAccountInterest = .05;

console.log(myBankAccountNumber);
console.log("Your account balance is: " + "$" + myAccountBalance);
console.log("You deposited " + "$" + myAccountDeposit);
console.log("You withdrew " + "$" + myAccountWithdrawal);
console.log("Your interest is " + myAccountInterest);

/*CHALLENGE: Silver
 Make a var called myNumber
//Set it to 0.
//Use shorthand to add 10 to it.
//Then use shorthand to subtract 1.
//Use shorthand to multiply by 9.
//Use shorthand to divide by 7.
//Just for practice, print myNumber to the console between each operation.
/*************************************************************
	 Operator ***** Example ***** Equivalent *****
    	+=		|    a += b   |    a = a + b   | 
    	-=		|    a -= b   |    a = a - b   | 
    	*=		|    a *= b   |    a = a * b   | 
    	/=		|    a /= b   |    a = a / b   | 
	%=		|    a %= b   |    a = a % b   |   
              *****         *****            *****
*************************************************************/

/*-----------------------------------------------------------*/

var myNumber = 0;
myNumber += 10 
console.log(myNumber);
myNumber -= 1;
console.log(myNumber);
myNumber *= 9;
console.log(myNumber);
myNumber /= 7;
console.log(myNumber);


/*CHALLENGE: Gold
//Challenge #3 - Lifetime Supply
// Ever wonder how much 


a "lifetime supply" of your favorite snack is? Wonder no more!
// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount of glasses of water per day (as a number).
// Calculate how many glasses of water you would need for the rest of your life.
// Output the result to the screen like so: "You will need 5 million glasses to last you until the ripe old age of X".*/


