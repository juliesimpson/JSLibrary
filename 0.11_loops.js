// Indexing
// to access the index we use [] and the index number inside of them
var name = "Julie";
console.log(name.length);
console.log(name[0]);
console.log(name[1]);
console.log(name[2]);
console.log(name[3]);
console.log(name[4]);

//toLowerCase, toUpperCase

//lcv = loop control variable
var lcv = 0; 
while(lcv < 10) {
	console.log(name.toUpperCase());
	lcv +=1; //THIS IS CRITICAL!!! NO VAR LEADS TO INFINITY!!!
}

console.log("-------");

//create a while loop that starts at zero and ends at 10
//this while loop should print each number of the lcv
//make your lcv var count = 0

var count = 0;
while(count < 10) {
	console.log(count);
	count ++; // ++ is equal to count +=1
}

console.log("-------");

var num = 10; //lcv but we named it num
while(num > 0) {
	console.log(num);
	num -= 1; //same as num -- 
}
console.log("-------");

var evenCount = 1;
while (evenCount < 20) {
	if (evenCount % 2 === 0) {
		console.log(evenCount + " is even.");
	} else {
		console.log(evenCount + " is odd.");
	}
	evenCount++;
}
console.log("-------");
//create a while loop that will count to 50 by 5s
//use the lcv variable of countFive

var countFive = 0;
while (countFive <= 50) {
	console.log(countFive);
	countFive +=5 ; //same as countFive + 5
}