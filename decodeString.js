/*
	https://leetcode.com/problems/decode-string/
	decode a string, find most deeply nested element and then move outward?
	find most deeply nested in parens and then move outwards

	// keep a variable of item to be added to string.
	// parse the string, keep two stacks, one for directions, one for chars

	s = "3[a]2[bc]", return "aaabcbc".
	s = "3[a2[c]]", return "accaccacc".
	s = "2[abc]3[cd]ef", return "abcabccdcdcdef".
	
	d 3
	s a
	i [a2[c]]
	
*/

function decodeStr2d(str) {
	var res = "";
	var countStack = [];
	var resStack = [];
	var idx = 0;

	while ( idx < str.length ) {
		var current = str[idx];
		if (isDigit(current)) {
			var count = 0;

			while(isDigit(str[idx])) {
				count = 10 * count + (str[idx] - '0');
				idx++
			}

			countStack.push(count);

		} else if (current == '[') {
			resStack.push(res);
			res = "";
			idx++
		} else if (current == ']') {
			var temp = resStack.pop();
			var repeatTimes = countStack.pop();
			for(var i = 0; i < repeatTimes; i++) {
				temp += res;
			}
			res = temp;
			idx++
		} else {
			res += str[idx++]
		}
	}

	return res;
}

function isDigit(n) {
	if ( isNaN(parseInt(n))) {
		return false
	} else {
		return true;
	}
}

console.log(decodeStr2d("3[a2[c]]"));



function decodeStr(input) {
	var arr = input.split("");
	var result = "";
	var times = 1
	var chars = ""
	
	while(arr.length > 0) {
		var eval = arr.shift();
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

// console.log(decodeStr("3[a]2[bc]") == "aaabcbc");
// console.log(decodeStr("2[abc]3[cd]ef") == "abcabccdcdcdef"); //== "abcabccdcdcdef"
                                          //    abcabccdcdcdcdecdef