// require stuff here

var player = require("./player.js");
var monster = require("./monster.js");

var paul = player();
paul.name = "Paul";
console.log(paul.name);

var julie = player();
julie.name = "Julie";
console.log(julie.name);

var badMonster = monster();
badMonster.name = "coding";
console.log(badMonster.name);