/*

https://leetcode.com/problems/is-subsequence/

ex. 
s = "abc", t = "ahbgdc"
Return true.

1. find the index of each item
2. check if the current index is greater then the last index
*/

var subSeq = function(seq, str) {
	var seqArr = seq.split("");
	var findMe = seqArr.shift();
	
	for(var i = 0; i < str.length; i++){
		if (str[i] === findMe) {
			findMe = seqArr.shift();
		}
	}
	
	// Array.prototype.forEach.call(str, function(el, i) {
	// 	if (el === findMe) {
	// 		findMe = seqArr.shift();
	// 	}
	// })

	if (seqArr.length === 0 && !findMe) {
		return true;
	} else {
		return false;
	}
}


// console.log(subSeq("abc", "ahbgdc"));
// console.log(subSeq("axc", "ahbgdc"));
console.log(subSeq("acb", "ahbgdc"));