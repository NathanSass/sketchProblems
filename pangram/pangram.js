// PANGRAM DEFINITION: A short sentence containing all 26 letter of the English alphabet

// EXAMPLE: "A quick brown fox jumps over the lazy dog"

// REQUIREMENTS: Write a solution in JavaScript, Java, or C# that meets the following criteria:
// Accepts a string as an input parameter.
// If the input string is a pangram, return null.
// If the input string is not a pangram, return a string consisting of an alphabetical list of all the letters missing from the input string.
// The logic should be case-insensitive (i.e. a=A) Output should be in all lower case.


var pangramChecker = (function(){

	var letters = "zqxjkvbpygfwmucldrhsnioate".split('');
	
	var _checkLetter = function(currentLetter){
		var index = letters.indexOf(currentLetter);
		if (index > -1){
			letters.splice(index, 1);
		};

	};

	var _makeArray = function(str){
		if(typeof(str) === 'string'){
			return str.toLowerCase().split('');
		}else{
			return str;
		};
	}

	return function pangram(phrase){

		var checkPhrase = _makeArray(phrase);
		
		if(checkPhrase.length > 0){
			var currentLetter = checkPhrase.pop();
			_checkLetter(currentLetter);
			pangramChecker(checkPhrase);
		}else{
			if(letters.length === 0){
				return null
			}else{
				return letters
			}
		}
	};
})(); 

// pangramChecker("the quick brown fox jumps over the lazy dog".split(''))
// console.log(pangramChecker("The quick brown FOX jumps over the lazy dog"))
// console.log(pangramChecker("The quick brown FOX jumps over the lazy dog").split(''))
// pangramChecker("abskj".split(''))
// console.log(pangramChecker("ABskj"))

