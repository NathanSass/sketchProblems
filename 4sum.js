/*
	This one is O(n^3)
	1. sort the input array
	2. then fix the first two values in place and go through the sorted array finding the other two values
*/
function findSumPretty(inputArr, target) {
	var left;
	var right;
	var arr = inputArr.sort(function(a,b) { return a > b});
	var n = arr.length;
	var result = [];

	// fix the first two elements one by one and find the other two elements
	for(var i = 0; i < n; i++) {
		for( var j = i + 1; j < n; j++) {
			left = j + 1;
			right = n - 1;

			// to find the remaining two elements, move the index variables (l & r) toward eachother
			while(left < right) {
				var sum = arr[i] + arr[j] + arr[left] + arr[right];
				if (sum === target) {
					result.push([arr[i], arr[j], arr[left], arr[right]]);
					right--;
					left++;
				} else if(sum < target) {
					left++;
				} else {
					right--;
				}
			}
		}
	}

	return result;
}

console.log(findSumPretty([1, 0, -1, 0, -2, 2], 0));


/*
	O(n4) solution, just compares all values, checks if they are unique then pushes them to the result arr
*/

function sumBrute(arr, target) {
	var result = [];

	for(var i = 0; i < arr.length; i++) {
		for(var j = i + 1; j < arr.length; j++) {
			for(var k = j + 1; k < arr.length; k++) {
				for(var l = k + 1; l < arr.length; l++) {

					var first = arr[i];
					var second = arr[j];
					var third = arr[k];
					var fourth = arr[l];

					if (first + second + third + fourth == target) {
						var sorted = [first, second, third, fourth].sort(function(a, b) {
								return a > b;
						})
						if (isUnique(sorted, result)){
							result.push(sorted);
						}
					} 
				}
			}
		}
	}
	return result;
}

function isUnique(arr, allArrs) {
	// could also join in a string to compare but that is not recommended
	for(var i = 0; i < allArrs.length; i++) {
		var currentArr = allArrs[i]
		if (currentArr[0] == arr[0] &&
			currentArr[1] == arr[1] &&
			currentArr[2] == arr[2] &&
			currentArr[3] == arr[3]) {
			return false;
		}
	}
	return true;
}

// console.log(sumBrute([1, 0, -1, 0, -2, 2], 0));