// Implement a method to perform basic string compression
// using the counts of repeated characters. For example,
// the string aabcccccaaa would become a2blc5a3. If the
// "compressed" string would not become smaller than the
// orig- inal string, your method should return the original
// string.

// iterate over a string
// maintain a 'result' string
// check to see if the current charachter matches the final charachter of the result string
// if it does increment a counter, if it doesnt, add the counter to the end of the string

function stringCompress (string) {

	var result = '';
	var lastChar = '';
	var streak = 1;
	
	[].forEach.call(string, function(c, i) {
		if (i === 0 ) {
			lastChar = c;
		} else if (lastChar === c) {
			streak += 1;
		} else {
			result += (lastChar + streak);
			lastChar = c;
			streak = 1;
		}

		if (i === string.length - 1) {
			result += (lastChar + streak);
		}

	});

	if (result.length > string.length) {
		return string;
	}else {
		return result;
	}
}


console.log( stringCompress('aabcccccaaa') == 'a2b1c5a3');