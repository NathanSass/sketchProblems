// Write a method to replace all spaces in a string with'%20'.
// You may assume that the string has sufficient space at the
// end of the string to hold the additional characters, and that
// you are given the "true" length of the string.

function replaceSpace(string) {
	var replacedArr = string.trim().split("").map( function(l) {
		if (l === ' ') return '%20';
		return l;
	});
	
	return replacedArr.join('');
}

console.log( replaceSpace("Mr John Smith    ") );
