/*
	grid m * n
	https://leetcode.com/problems/unique-paths/
	http://stackoverflow.com/questions/9105699/algorithm-for-finding-all-paths-in-a-nxn-grid
*/

function uniquePathsDP(m, n) {
	// build matrix
	var board = [];
	for(var i = 0; i < m; i++) {
		board[i] = [];
		for(var j = 0; j < n; j++) {
			board[i][j] = 1;
		}
	}

	for(var i = 1; i < m;i ++){
		for(var j = 1; j < n; j++){
			board[i][j] = board[i-1][j]+board[i][j-1];
		}
	}
	return board[m-1][n-1];

}

console.log(uniquePathsDP(4, 4));

function uniquePaths(m, n) {
	// build matrix
	var board = [];
	for(var i = 0; i < m; i++) {
		board[i] = [];
		for(var j = 0; j < n; j++) {
			if (i == m - 1 && j == n - 1) {
				// this will be the end to look for
				board[i][j] = 2;
			} else {
				board[i][j] = 1;
			}
		}
	}

	// find all possible ways
	var total = 0;
	var recurseCount =  function(row, col, board) {
		if(board[row][col] == 2) {
			total ++
			return;
		} 


		board[row][col] = 0;
		//check <-
		if (board[row][col - 1] > 0) {
			recurseCount(row, col - 1, board);
		}
		// check ->
		if (board[row][col + 1] > 0) {
			recurseCount(row, col + 1, board);
		}
		// check v
		if (board[row + 1] && board[row + 1][col] > 0) {
			recurseCount(row + 1, col, board);
		}
		// check ^
		if (board[row - 1] && board[row -1][col] > 0) {
			recurseCount(row - 1, col, board);
		}

	}
	// console.log(recurseCount(0, 0, board));
	// total += recurseCount(0, 0, board);
	recurseCount(0, 0, board)

	return total;
}

// console.log(uniquePaths(7, 7));