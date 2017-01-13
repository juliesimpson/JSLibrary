// Creating a Prototype

// Standard way to create an object prototype is to use an object constructor function

function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
}

//With a constructor function, use the 'new' keyword to create new objects from the same prototype

var myFather = new Person("John", "Doe", 50, "blue");
var myMother = new Person("Sally", "Rally", 48, "green");
console.log(myFather);
console.log(myMother);

//The constructor function is the prototype for Person objects.
//It is considered good practice to name constructor function with an upper-case first letter.

// Example: create prototype for Student objects
function Student(first, last, age, gender) {
	this.firstName	=	first;  
	this.lastName 	=	last;
	this.age		=	age;
	this.gender		=	gender;		
}

// Create new objects from prototype
var firstStudent = new Student("Jeff", "Smith", 6, "male");
var secondStudent = new Student("Jane", "Jones", 8, "female");

console.log(firstStudent);
console.log(secondStudent);
