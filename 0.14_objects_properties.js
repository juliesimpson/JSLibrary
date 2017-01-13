// Empty Object Literal
var emptyObject = {};

// Object with Properties
var facebookFriend = {
	name: "",
	age: 0,
	vocation: "",
	inRelationship: true  
};

facebookFriend.name = "Jona"; // (.) or dot is a type of operator; it's an accessor
console.log(facebookFriend.name);

facebookFriend.age = 40;
console.log(facebookFriend.age);
console.log(facebookFriend.name + " just turned " + facebookFriend.age +".");

if(facebookFriend.inRelationship) {
	console.log(facebookFriend.name + " is in a relationship");
}

facebookFriend.name = "Kenn";
console.log(facebookFriend.name);

var studentInfo = {
	firstName	: "",
	lastName	: "",
	age			: 0
		
};
studentInfo.firstName = "Joie";
studentInfo.lastName = "Simpson";
studentInfo.age = 13;

var showStudentInfo = studentInfo.firstName + " " + studentInfo.lastName + " is " + studentInfo.age + "."
console.log(showStudentInfo);
