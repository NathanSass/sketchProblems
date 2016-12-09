/*
	https://leetcode.com/problems/decode-string/
	decode a string, find most deeply nested element and then move outward?
	find most deeply nested in parens and then move outwards

	// keep a variable of item to be added to string.
	// parse the string, keep two stacks, one for directions, one for chars

	s = "3[a]2[bc]", return "aaabcbc".
	s = "3[a2[c]]", return "accaccacc".
	s = "2[abc]3[cd]ef", return "abcabccdcdcdef".

	
*/

function decodeStr(input) {
	var arr = input.split("");
	var result = "";
	var times = 1
	var chars = ""
	
	while(arr.length > 0) {
		var eval = arr.shift();;
		if ( isNaN(parseInt(eval)) ) {
			if (eval === "[") {
				// find next closing bracked index, and make loop for amount inside
				var closerI = arr.indexOf("]");
				chars = arr.splice(0, closerI + 1);
				chars.pop(); // removes the "]"
				chars = chars.join("");

			} else { // we have a letter
				chars = eval;
			}

			// do the thing
			for( var i = 0; i < times; i++) {
				result += chars;
			}

			times = 1;

		} else { // we have an int
			times = parseInt(eval);
		}
	}
	return result;
}

console.log(decodeStr("3[a]2[bc]") == "aaabcbc");
console.log(decodeStr("2[abc]3[cd]ef") == "abcabccdcdcdef"); //== "abcabccdcdcdef"
                                          //    abcabccdcdcdcdecdef