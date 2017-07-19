/*
	https://leetcode.com/problems/remove-element/#/description
*/

function removeElement(nums, val) {
	for(var i = 0; i < nums.length; i++) {
		if (nums[i] === val) {
			nums.splice(i, 1);
		}
	}

	return nums
}

var a = [3,2,2,3]