/*
https://leetcode.com/problems/count-and-say/#/description

n String to print 
0 1 
1 1 1 
2 2 1 
3 1 2 1 1 
*/

var results = ["1"]

function getElement(n) {
	while (results.length < n + 1) {
		var lastItem = results[results.length - 1];
		var nextElement = getNextElement(lastItem);
		results.push(nextElement);
	}

	return results[n - 1];
}

function getNextElement(x) {
	var prevItem = x + "";
	var result = "";
	var prevChar = prevItem[0];
	var currentChar = prevItem[0];
	var count = 1;
	for (var i = 1; i < prevItem.length; i++) {
		currentChar = prevItem[i];
		if (prevChar == currentChar) {
			count ++
		} else {
			result += count;
			result += prevChar;
			count = 1;
			prevChar = currentChar;
		}
	}

	result += count;
	result += currentChar;

	return result;
}

console.log(getElement(4) == "1211")