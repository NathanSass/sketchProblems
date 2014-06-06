// PANGRAM DEFINITION: A short sentence containing all 26 letter of the English alphabet

// EXAMPLE: "A quick brown fox jumps over the lazy dog"

// REQUIREMENTS: Write a solution in JavaScript, Java, or C# that meets the following criteria:
// Accepts a string as an input parameter.
// If the input string is a pangram, return null.
// If the input string is not a pangram, return a string consisting of an alphabetical list of all the letters missing from the input string.
// The logic should be case-insensitive (i.e. a=A) Output should be in all lower case.


var pangramChecker = (function(){
	var letters = "zqxjkvbpygfwmucldrhsnioate";
	

	var _checkLetter = function(currentLetter){
		console.log(currentLetter)
		console.log(Letters.indexOf(currentLetter) >= 0)

	}

	return function pangram(phrase){
		var checkPhrase  = phrase
		if(letters.length > 1){
			var currentLetter = checkPhrase.pop();
			_checkLetter(currentLetter);
			// console.log(currentLetter)
			pangramChecker(checkPhrase);

		}else{
			// alert('here')
			// return missingLetters
			console.log(missingLetters)
		}
	};
})(); 

pangramChecker(['a', 'b', 'c', 'z'])

