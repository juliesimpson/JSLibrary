// Scopes

var name = "kenn"; //global scope
//var random

function greetings() {
	var name = "ralph"; //local scope
	random = "bread"; //becomes global without using 'var'
	return "Hello" + name;
}

console.log(greetings());
console.log(name); 
console.log(random);

