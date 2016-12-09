/*
	Find the contiguous subarray within an array (containing at least one number) which has the largest sum.
	https://leetcode.com/problems/maximum-subarray/
*/

/*
	Keep track of running total and then max so far. If you find a item in the arr greater then your running total you have a new max ending here.
*/
function findMaxSub_improv(arr) {
	var maxSoFar = arr[0];
	var maxEndingHere = arr[0];

	for(var i = 1; i < arr.length; i++) {
		maxEndingHere = Math.max(maxEndingHere + arr[i], arr[i]);
		maxSoFar = Math.max(maxSoFar, maxEndingHere);
	}

	return maxSoFar;

}

var a = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

console.log(findMaxSub_improv(a)); // [4,-1,2,1]
// console.log(findMaxSub_improv([1])); // [4,-1,2,1]


/* 
	O(n ^ 2) solution
	issue here is adding the same things mult times
*/
function findMaxSub(arr) {
	// iterate through and find highest amount for each starting index
	var max = -100000;
	var startI = 0;
	var endI = 0;

	for(var i = 0; i < arr.length; i++) {
		var currentTotal = arr[i];
		
		for(var j = i + 1; j < arr.length; j++) {
			currentTotal += arr[j];
			if( currentTotal > max) {
				startI = i;
				endI = j;
				max = currentTotal;
			}
		}
	}

	return arr.slice(startI, endI + 1);
}
