/*
	https://leetcode.com/problems/find-right-interval/
	Given a set of indexes if there is a an index that fits to the right of it place it.

	nested loops and for each, check for a pair that has a value before it
*/

function findItervalBrute(arr) {
	var result = [];
	for(var i = 0; i < arr.length; i++) {
		var first = arr[i];
		var value = -1;
		for(var j = 0; j < arr.length; j++) {
			if(j === i){ continue }
			var second = arr[j];
			if (first[1] === second[0]) {
				value = j;
				break;
			}
		}

		result.push(value);
	}

	return result;
}

var a = [ [1,2] ]
// console.log(findItervalBrute(a))
var b = [[3,4], [2,3], [1,2] ];
var c = [ [1,4], [2,3], [3,4] ];
var d = [[3,4],[2,3],[1,2]];
console.log(findItervalBrute(d))
