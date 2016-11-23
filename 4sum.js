/*
	O(n4) solution, just compares all values, checks if they are unique then pushes them to the result arr
*/

function sumBrute(arr, target) {
	var result = [];

	for(var i = 0; i < arr.length; i++) {
		for(var j = 0; j < arr.length; j++) {
			for(var k = 0; k < arr.length; k++) {
				for(var l = 0; l < arr.length; l++) {

					if( i == j || i == k || i == k || i == l || j == k || j == l || k == l) {
						continue;
					}

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

console.log(sumBrute([1, 0, -1, 0, -2, 2], 0));