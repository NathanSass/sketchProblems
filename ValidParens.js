

function validParens(str) {
	var i = 0;
	var openers = "{[(";
	var closers  = "}])";

	while( str.length > 0 && i < str.length) { // needed the check for the index here.

		var closerI = closers.indexOf(str[i]); 

		// Do we have a closer?
		if (closerI >= 0) {

			// Check if prev closer matches current
			if (str[i -1] === openers[closerI]) {
				// remove matching sequence from str
				str = str.slice(0, i - 1) + str.slice(i + 1);
				i -= 1;
			
			} else { // mismatching openers & closers ex. (}
				return false;
			}
		}
		
		i += 1;
	
	}

	return true;
}

var a = "{[]()}";
console.log(validParens(a));

var b = "{[(]}"
console.log(validParens(b));

var c = "{[}"
console.log(validParens(c));

var d = "{[(])}"
console.log(validParens(d));

/*
	I got a little confused on this one because I did not look at all the test cases
	initially, i overlooked the importance of order

	Once I went through the problem by hand I came up with the solution I implemented.

	when using a while loop and a this sort of approach, you need to check for the length of the
	str and that the index doesn't surpass the str length

	If there were also charachters or other types of input, we could use a stack
*/