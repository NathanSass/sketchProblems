

/*
	This solution finds the maximum water height you could have at a given point, then you subtract away
	the columns that are there from the array. O(n)
*/
// [0,1,0,2,1,0,1,3,2,1,2,1]
function findWater(arr) {
    // left[i] contains height of tallest bar to the
    // left of i'th bar including itself
    var left = [];
    // Right [i] contains height of tallest bar to
    // the right of ith bar including itself
    var right = [];
 
    // Initialize result
    var water = 0;
 
    // Fill left array
    left[0] = arr[0];
    for (var i = 1; i < arr.length; i++) {
      left[i] = Math.max(left[i-1], arr[i]);
    }
 
    // Fill right array
    right[arr.length - 1] = arr[arr.length - 1];
    for (var i = arr.length - 2; i >= 0; i--) {
      right[i] = Math.max(right[i+1], arr[i]);
    }
 
    // Calculate the accumulated water element by element
    // consider the amount of water on i'th bar, the
    // amount of water accumulated on this particular
    // bar will be equal to min(left[i], right[i]) - arr[i] .
    for (var i = 0; i < arr.length; i++) {
      water += Math.min(left[i],right[i]) - arr[i];
    }
 
    return water;
}

// console.log(findWater([0,1,0,2,1,0,1,3,2,1,2,1]) == 6);
console.log(findWater([3, 0, 0, 2, 0, 4]) === 10 );


// O(n^2)
function trappingRain(arr) {
	var result = 0;
	var left = 0;
	var right = arr.length - 1;
	var prevHeight = 0;

	while (left < right) {
		var leftItem = arr[left];
		var rightItem = arr[right];
		// find minimum height because water cannot be higher than that
		var height = (leftItem < rightItem ? leftItem : rightItem);
		
		if (height > prevHeight) {
			// remove the old height block, because it may be now underwater and displacing volume
			result -= prevHeight;
			// pretend the whole are between left and right is underwater
			result += (right - left - 1) * (height - prevHeight);
			// this is new waterline level
			prevHeight = height;
		} else {
			// this area is underwater, so remove the height of the item displacing water
			result -= height;
		}

		if (leftItem <= rightItem) {
			left ++;
		} else {
			right --;
		}
	}

	return result;
}

// console.log(trappingRain([0,1,0,2,1,0,1,3,2,1,2,1]) == 6);