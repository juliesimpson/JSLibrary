// Javascript does NOT have block scope
// It does have Function Scope : any variables declared inside
// a function will be visible in that entire function

// example:
function funcScope() {
	var x = 2;

	if (x == 2) {
		var y = 15;
		for (var i = 0; i <=5; i++) {
			var forNum = i;
			console.log(forNum); // forNum=0, 1, 2, 3, 4, 5
		}
	}
	console.log(x); // x=2
	console.log(y); // y=15
	
}

funcScope();
console.log(x); // undefined; out of function scope