// Global Abatement
// Global variables weaken the resiliency of programs and should be avoided.
// One way to minimize use of global variables is to create a single global variable for your app.

// this variable becomes container for your application
var myApp = {};

myApp.stooge = {
firstName: "Joe",
lastName: "Howard"
};

myApp.flight = {
airline: "Oceanic",
number: 815,
departure: {
IATA: "SYD",
time: "2004-09-22 14:55",
city: "Sydney"
},
arrival: {
IATA: "LAX",
time: "2004-09-23 10:42",
city: "Los Angeles"
}
};