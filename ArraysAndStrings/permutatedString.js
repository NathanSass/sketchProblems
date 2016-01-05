// Given two strings, write a method to decide if one is a
// permutation of the other.
// https://www.reddit.com/r/dailyprogrammer/comments/164zvs/010713_challenge_116_easy_permutation_of_a_string/
// p.73



function isPermut (str1, str2) {
	if (str1.length !== str2.length) return false;
	
	var string1 = orderStr(str1);
	var string2 = orderStr(str2);
	return string1 === string2;
}

function orderStr(str) {
	return str.toLowerCase().split('').sort().join('');
}

console.log( isPermut("abcd", "cabd") );