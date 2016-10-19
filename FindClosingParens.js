function findClosingParen(startI, str) {
	var parenNest = 1;

	for(var i = startI + 1; i < str.length; i++) {
		
		if (str[i] === "(") {
			parenNest += 1;
		}

		if (str[i] == ")") {
			parenNest -= 1;
		}
	
		if (parenNest === 0) {
			return i;
		}

	}

	throw new Error("No closeing parens");
}

var a = "a(bc(d))e";

console.log(findClosingParen(1, a))

/*
Made a small mistake here where i was comparing to i instead of str[i]

O(n) runtime because it can be done in one pass
O(1) space because only need to keep one variable regardless of size of input
*/