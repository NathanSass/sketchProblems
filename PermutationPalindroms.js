function permutationIsPalindrome(str){
	var charCounts = {};

	// create the charcounts dictionary
	for (var i = 0; i < str.length; i++) {
		var c = str.charAt(i);

		if (c in charCounts) {
			charCounts[c] += 1;
		} else {
			charCounts[c] = 1;
		}
	}

	// Analyze the dictionary
	var hasOdd = false;
	for (var char in charCounts) {
		var count = charCounts[char];

		// all chars should be in even pairs
		// except for one that should be odd (center)
		if(count % 2 !== 0) {
			if (hasOdd) { // Case: there is more than one odd pair
				return false;
			} else {
				hasOdd = true;
			}
		}
	}

	// needs to have at least one odd
	if (hasOdd) {
		return true;
	} else {
		return false;
	}
}

function permutationIsPalindrome_best(str) {
	// use one data structure to track the even and odd relationship
	var unpaired = new Set();

	for (var i = 0; i < str.length; i++) {
		var c = str.charAt(i);

		if (unpaired.has(c)) {
			unpaired.delete(c);
		} else {
			unpaired.add(c);
		}
		// if c is in unpaired, delete it, else add it
	}

	return unpaired.size <= 1;
}

console.log(permutationIsPalindrome_best("civic"));
console.log(permutationIsPalindrome_best("ivicc"));
console.log(permutationIsPalindrome_best("civil"));
console.log(permutationIsPalindrome_best("livci"));

/*
	O(2 * n)  = O(n) runtime 
	constant memory usage, because there can only be 26 letters in the charCounts obj.

	I began by talking myself throught the brute force method and then looked for patterns
	along the way. I first noticed the even counts of charachters then noticed that you must
	have one odd piece in the center.
*/
