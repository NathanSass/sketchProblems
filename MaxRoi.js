

function maxRoi (arr) {
	var roi = 0;
	var min = arr[0];

	for(var i = 0; i < arr.length; i++) {
		var current = arr[i];
		// console.log(current)
		min = Math.min(min, current);

		roi = Math.max(roi, current - min);
	}

	return roi;
}

console.log(maxRoi([3, 2, 1, 3, 5]))