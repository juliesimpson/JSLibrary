// switch cases

var marginOfColtSuperBowlWin = 17;
var result

switch(marginOfColtSuperBowlWin) {
	case 3:
		result = "Cool, that will be a good game";
		break;
	case 7:
		result = "I like it. Just close enough";
		break;
	case 10:
		result = "That's what I'm talking about";
		break;
	case 17:
		result = "Sweet, we're awesome";
		break;
	default:
		result = "mmmhm getting there";
}
console.log("Switch Result: " + result);