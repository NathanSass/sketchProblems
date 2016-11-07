function Animal(name) {
	this.name = name;
	this.age = 1;
}

Animal.prototype.sayAge = function() {
	console.log("I am " + this.age + "!");
};

var dog = new Animal("Dog");

dog.sayAge();

Animal.prototype.sayName = function() {
	console.log(" I am a " +  this.name + "!");
}
dog.sayName();

function Fish() {}
Fish.prototype.flop = function() {
	console.log("I'm flopping");
}

var magiCarp = new Fish();
magiCarp.flop();

Animal.prototype = Fish
var garidos = new Animal("garidos");
console.log(Object.getPrototypeOf(garidos))
console.log(Object.getPrototypeOf(dog)) // still an Animal
// console.log(dog.prototype)
// dog.flop()







/* Hoisting*/
var notHoisted = function() {
	console.log("I'm a notHoisted");
}
notHoisted();

hoisted()
function hoisted(){
	console.log("I'm hoisted")
}

