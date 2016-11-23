/*
	Runtime O(n)
	Memory O(l)

	This solution waits to find a key with an immediately previous value then begins counting, checking for matching values.

	Another approach would be to build a map. But as you are building the map, check for adjacent values.
		If an adjacent value is found.
			increment it up.
*/
function longestConsec2(nums) {
	var min = nums[0];
	var max = nums[0];
	var ordered = {};
	var longestStreak = 1;
	var currentStreak = 1;
	
	// build has table of values
	for (var i = 0; i < nums.length; i++) {
		min = Math.min(min, nums[i]);
		max = Math.max(max, nums[i]);
		ordered[nums[i]] = true;
	}

	for (var key in ordered) {
		var keyInt = parseInt(key, 10);
		if (!(keyInt - 1 in ordered)) {
			var nextNum = keyInt + 1;
			while (nextNum in ordered) {
				currentStreak += 1;
				nextNum += 1;
			}
			longestStreak = Math.max(longestStreak, currentStreak);
			currentStreak = 1;
		}
	}

	return longestStreak;
}

console.log(longestConsec2([9,1,4,7,3,-1,0,5,8,-1,6]) == 7)


/*
	Runtime O(n + n) = O(n)
	Memory usage O(n)
*/
function longestConsecutive(nums) {
	var min = nums[0];
	var max = nums[0];
	var ordered = {};
	var longestStreak = 1;
	var currentStreak = 1;
	
	// build has table of values
	for (var i = 0; i < nums.length; i++) {
		min = Math.min(min, nums[i]);
		max = Math.max(max, nums[i]);
		ordered[nums[i]] = true;
	}

	// Iterate through table checking for values 
	for (var i = min + 1; i <= max; i++) { // ineffecient cause it goes through all nums
		if (i in ordered) {
			currentStreak += 1;
			longestStreak = Math.max(longestStreak, currentStreak);
		} else {
			currentStreak = 0;
		}
	}

	return longestStreak;
}

// console.log(longestConsecutive([100, 4, 200, 1, 3, 2]))
// console.log(longestConsecutive([9,1,4,7,3,-1,0,5,8,-1,6]) == 7)