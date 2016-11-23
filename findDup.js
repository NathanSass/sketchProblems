function findDup(arr) {
	var n = arr.length;
	var expectedSum = 0; //6
	var actualSum = 0; // 4
	for( var i = 0; i < n; i++) {
		actualSum += arr[i];
		expectedSum += (i + 1);
	}

	return Math.abs(actualSum - expectedSum);
}

console.log(findDup([1,1,2]) == 1);
console.log(findDup([1,1]) == 1);