/*
	https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
*/

/// basic solution
var findMin = function(nums) {
	var min = nums[0];

	for(var i = 0; i < nums.length; i++) {
		min = Math.min(min, nums[i]);
	}

	return min;
}

var a = [4, 5, 6, 7, 0, 1, 2];
console.log(findMin(a));