function wiggleSequence(nums) {
	if(nums.length < 2) {
		return nums.length;
	}
	var up = [];
	var down = [];

	for(var i = 0; i < nums.length; i++) {
		up[i] = 0;
		down[i] = 0;
	}
	for (var i = 1; i < nums.length; i++) {
		for(var j = 0; j < i; j++) {
			if(nums[i] > nums[j]) {
				up[i] = Math.max(up[i], down[j] + 1);
			} else if(nums[i] < nums[j]) {
				down[i] = Math.max(down[i], up[j] + 1)
			}
		} 
	}

	return 1 + Math.max(down[nums.length - 1], up[nums.length - 1]);
}
var b = [1,17,5,10,13,15,10,5,16,8];
var a = [1,7,4,9,2,5];

console.log(wiggleSequence(b))