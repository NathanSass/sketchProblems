// PANGRAM DEFINITION: A short sentence containing all 26 letter of the English alphabet

// EXAMPLE: "A quick brown fox jumps over the lazy dog"

// REQUIREMENTS: Write a solution in JavaScript, Java, or C# that meets the following criteria:
// Accepts a string as an input parameter.
// If the input string is a pangram, return null.
// If the input string is not a pangram, return a string consisting of an alphabetical list of all the letters missing from the input string.
// The logic should be case-insensitive (i.e. a=A) Output should be in all lower case.


///////////////////////////////////////////////////////////////////////
/// I found a variety of excellent and concise solutions on the internet.
/// I wanted to implement something unique. I decided to use a immediately-invoked
/// function expression (IIFE) along with a recursive call. I had a lot of fun doing
/// this problem and I am going to walk you through my solution.
///////////////////////////////////////////////////////////////////////

var pangramChecker = (function(){

	var letters = "zqxjkvbpygfwmucldrhsnioate".split('');    // This variable holds state.
	
	var _checkLetter = function(currentLetter){              // I usually prefix my helper methods with a _
		var index = letters.indexOf(currentLetter);
		if (index > -1){
			letters.splice(index, 1);
		}
	};
 
	var _makeArray = function(str){                           // This function is needed on the first call.
		if(typeof(str) === 'string'){                           // If I have a string then I convert it to an
			_resetLetters()                                       // array and make sure the case of the letters is
			return str.toLowerCase().split('');                   // consitent. Since I use the destructive splice
		}else{                                                  // and keep track of the state of the letters. I also
			return str;                                           // need to reset the value of letters when I invoke
		}                                                       // pangramChecker with a new value.
	};

	var _resolveSolution = function(letters){                 // This is where I decide if I have a pangram and
		if(letters.length === 0){                               // resolve the final response to the user.
			return null;
		} else {
			return letters;
		}
	};

	var _resetLetters = function() {                           
		letters = "zqxjkvbpygfwmucldrhsnioate".split('');       // This is needed when the function is called with a new phrase.
	};

	return function pangram(phrase){                                                  
		var checkPhrase = _makeArray(phrase);                    // This is only needed the first time the function is invoked.
		if(checkPhrase.length === 0) {                           // This is my base case.
			return _resolveSolution(letters);                      // I wanted to move this logic out of the main function.
		}	                                                      
		var currentLetter = checkPhrase.pop();                                                 
		_checkLetter(currentLetter);                               
		return pangram(checkPhrase);                             // I did not have a return here for a long time and it took me a
	};                                                         // while to figure out why the function was returning undefined.

})();                                                        // IIFE