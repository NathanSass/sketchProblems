/*
	Evaluates a string to int

	Goes throught string from beginning to end. When it reaches it multiplies the running total by 10 then adds a new value
*/
function stringToInt(str) {
	var isNeg = false;
	var total = 0;
	if (str[0] === "-") {
		isNeg = true;
		str = str.slice(1, str.length);
	}
	
	for (var i = 0 ; i < str.length; i++) {
		var intVal = eval(str[i]); // could substitute for another thing
		total *= 10;
		total += intVal;
	}

	if (isNeg) {
		return total * -1;
	} else {
		return total;	
	}
}

console.log(stringToInt("253"));