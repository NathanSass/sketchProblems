/*

https://leetcode.com/problems/is-subsequence/

ex. 
s = "abc", t = "ahbgdc"
Return true.

1. find the index of each item
2. check if the current index is greater then the last index
*/

var subSeq = function(seq, str) {
	var seqI = 0;
	var len = seq.length;

	for(var i = 0; i < str.length; i++){
		if (str[i] === seq[seqI]) {
			seqI++;
			
			if (seqI >= len - 1) {
				return true;
			}
		}
	}
	
	return false;
}

	// Array.prototype.forEach.call(str, function(el, i) {
	// 	if (el === findMe) {
	// 		findMe = seqArr.shift();
	// 	}
	// })

// console.log(subSeq("abc", "ahbgdc"));
console.log(subSeq("axc", "ahbgdc"));
// console.log(subSeq("acb", "ahbgdc"));