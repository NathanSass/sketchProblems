/*
	PROBLEM: MERGE SORTED ARRAYS
	go through the two arrays at the same time, use two different indexes to compare values. Add the smaller value to the result array and then increment its value. Do this until each index is at the ends of its respective array.
*/

function mergeSorted(arr1, arr2) {
	var result = [];
	var i = 0;
	var k = 0;

	while (i < arr1.length || k < arr2.length) {
		var a = arr1[i];
		var b = arr2[k];
		if (a < b) {
			result.push(a);
			i += 1;
		} else if (a > b) {
			result.push(b)
			k += 1;
		} else {
			if (a === parseInt(a, 10)) {
				result.push(a);
			}
			if (b === parseInt(b, 10)) {
				result.push(b);
			}
			k += 1;
			i += 1;
		}
	}

	return result;
}

var arr1 = [3, 4, 6, 10, 11, 15];
var arr2 = [1, 5, 8, 12, 14, 19,200];

console.log(mergeSorted(arr1, arr2));