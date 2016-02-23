var fs;
try { fs  = require("fs"); } catch (e) {}
/*
Pseudocode:
1. As I analyze the string from left to right, keep track of what the string should look like.

([)]

({()()})

Input -> Tracker string
( -> )
[ -> ])
) -> for closing parens, it checks what the last paren in the result string was
	 if they match then the program continues

The toughest thing will be choosing a data structure for this.
I think two strings. One for Openers, and one for closers. Search the first string and figure out if it is an opener. Then use that index to find it's closer

*/

function validParens(str){
	var open   = "[{(";
	var closer = "]})";

	var result = "";

	for (var i = 0; i < str.length ; i++) {
		var c = str[i];
		var lastC = result[result.length - 1];
		var acceptableCloserIndex = open.indexOf(lastC);
		
		if (result.length === 0 && open.indexOf(c) >= 0) {
			result += c;
		} else if (c === closer[acceptableCloserIndex]) {
			result = result.slice(0, -1);
		} else if (closer.indexOf(c) >= 0) {
			return false;
		} else {
			result += c;
		} 
	}

	if (result.length > 0) {
		return false;
	}

	return true;
}

if (fs) {
	fs.readFileSync('./inputData.txt').toString().split('\n').forEach(function (line) {
	    if (line !== "") {
	    	console.log(validParens(line));
	    }
	});
} else {

console.log(validParens('()'));
console.log(validParens('([)]'));
console.log(validParens('({()()})'));
	
}

/*
Pseudocode:
	1. As I analyze the string from left to right, keep track of what the string should look like.

	([)]

	({()()})

	Input -> Tracker string
	( -> )
	[ -> ])
	) -> for closing parens, it checks what the last paren in the result string was
		 if they match then the program continues

	The toughest thing will be choosing a data structure for this.
	I think two strings. One for Openers, and one for closers. Search the first string and figure out if it is an opener. Then use that index to find it's closer


 Reflection:
	 had an issue with using a forEach, apparently return doesn't break a foreach
	 Also I mixed up the for loop syntax and had i < str.length -1, which made it skip the last digit.
	 Errored on codeEval, passed all my test cases though
*/