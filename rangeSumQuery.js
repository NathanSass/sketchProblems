/* SQRT decomposition */
/*
	The idea here is to cache a blocks of the array, so we dont have to rebuild the whole thing everytime. The SQRT is a good starting point and generalist ideology.
*/

var NumArray = function(nums) {
    this.nums = nums;
    var blockCount = Math.sqrt(nums.length);
    var arrLength = Math.ceil(nums.length / blockCount);
    this.nums = nums;
    this.blockSums = [];
    for (var j = 0; j < arrLength; j++){ //initialize with zero values
    	this.blockSums[j] = 0;
    }

    for (var i = 0; i < nums.length; i++) {
    	var indexInBlock = Math.floor(i / arrLength)
    	this.blockSums[indexInBlock] += nums[i];
    }
};

NumArray.prototype.update = function(i, val) {
    var block_location = i / this.blockSums.length;
    this.blockSums[block_location] = this.blockSums[block_location] - this.nums[i] + val;
    this.nums[i] = val;
};

NumArray.prototype.sumRange = function(i, j) {
    var result = 0;
    var len = this.blockSums.length;
    var startBlock = Math.ceil(i / len);
    var endBlock = Math.ceil(j / len);

    if (startBlock == endBlock){
    	for (var k = 0; k < j; k++) {
    		result += this.nums[k];
    	}
    } else {
    	
    	for (var k = i; k < (startBlock + 1) * len; k++) { //Always adds up the first one, this should be tweeked
    		result += this.nums[k];
    	}
    	for(var k = startBlock + 1; k <= endBlock - 1; k++) {
    		result += this.blockSums[k];
    	}

    	for(var k = endBlock * len; k <= j; k++) {
    		result += this.nums[k];
    	}
    }

    return result;

};

var nums = [1,4,3,6,7,5,2,0,9]
var numArray = new NumArray(nums);
// console.log(numArray.sumRange(0, 2) === );
console.log(numArray.sumRange(0, 6) == 28);
numArray.update(0, 2);
console.log(numArray.sumRange(0, 6) == 29);