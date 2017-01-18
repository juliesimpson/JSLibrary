
var stooge = {
	firstName: "Jerome",
	lastName: "Howard"
};

console.log(stooge.firstName);

// undefined value is produced if an attempt is made to retrieve a nonexistent member
console.log(stooge.middleName);
console.log(stooge.FIRSTNAME);

// the || operator can be used to fill in default values
var middle = stooge.middleName || "none";
console.log(middle);

// attempting to retrieve values from undefined will throw a TypeError exception. 
// this can be prevented with the && operator
console.log(stooge.middleName); // undefined
//console.log(stooge.middleName.age); //TypeError
console.log(stooge.middleName && stooge.middleName.age); //undefined





