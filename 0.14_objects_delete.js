// The "delete" operator can be used to remove a property from an object.
// It does not touch any of the objects in the prototype linkage.

// creating object prototype
var stooge = {
	firstName: "Jerome",
	lastName: "Howard",
	nickName: "Curly"
};

// creating object linked to prototype
var anotherStooge = Object.create(stooge);
console.log(anotherStooge.nickName);
anotherStooge.nickName = "Moe";
console.log(anotherStooge.nickName);

// Removing nickname from anotherStooge reveals nickname of the prototype.
 delete anotherStooge.nickName;
console.log(anotherStooge.nickName);