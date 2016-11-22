var matrix = [
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5]
]

/* 
	brute force solution
*/
function rangeSumQuery2d(row1, col1, row2, col2) {
	var result = 0;
	for(var row = row1; row <= row2; row++) {

		for(var col = col1; col <= col2; col++) {
			var item = matrix[row][col];
			result += item;
		}
	}

	return result;
}

console.log(rangeSumQuery2d(2, 1, 4, 3) == 8);
console.log(rangeSumQuery2d(1, 1, 2, 2) == 11);
console.log(rangeSumQuery2d(1, 2, 2, 4) == 12);