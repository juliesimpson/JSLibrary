// The constructor accepts a single object specifier.
// It's useful when there is a very large number of parameters.
// That object contains the specifications of the object to be constructed.

// Instead of: var myObject = maker(f, l, m, c, s);
// Object Specifier:
var myObject = maker({
	first: f,
	last: l,
	state: s,
	city: c
});

// Another example:
// Instead of: var myObject = make(a, b, c, d);
var myObject = make({
	option1: "a",
	option2: "b",
	option3: "c",
	option4: "d"
});