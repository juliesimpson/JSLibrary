var stooge = {
	firstName: "Jerome",
	lastName: "Howard"
};


//A value in an object can be updated by assignment. If the property name already
//exists in the object, the property value is replaced:
console.log(stooge.firstName);

stooge.firstName = "Mickey";
console.log(stooge.firstName);

//If the object does not already have that property name, the object is augmented:
stooge.middleName = 'Lester';
console.log(stooge.middleName);

stooge.nickname = 'Curly';
console.log(stooge.nickname);

