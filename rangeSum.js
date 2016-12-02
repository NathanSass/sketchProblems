/*
	Given an integer array nums, find the sum of the elements between indices i and j (i ≤ j), inclusive.

	https://leetcode.com/problems/range-sum-query-immutable/

	if optimizing for space, a simple loop will work
	to optimize for runtime, use a o(n^2) solution and cache all results, then use a lookup
*/

var arr = [-2, 0, 3, -5, 2, -1];

var NumArray = function(nums) {
  this.cache = {};
	for(var i = 0; i < nums.length; i++) {
		var result = 0;
		for(var j = i; j < nums.length; j++) {
			result += nums[j];
			this.cache[i + "" + j] = result;
		}
	}
};

NumArray.prototype.sumRange = function (start, end) {
	return this.cache[start + "" + end];
};

function rangeSum(start, end) {
	var result = 0;
	for( var i = start; i <= end; i++ ){
		result += arr[i];
	}
	return result;
}

// var A = new NumArray(arr);
// console.log(A.sumRange(0, 2) == 1);
// console.log(A.sumRange(2, 5) == -1);
// console.log(A.sumRange(0, 5) == -3);

var B = new NumArray([-1]);
console.log(B.sumRange(0,0));

// console.log(rangeSum(0, 2) == 1);
// console.log(rangeSum(2, 5) == -1);
// console.log(rangeSum(0, 5) == -3);

