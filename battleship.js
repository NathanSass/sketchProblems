/*
	Looks for the top left corner of each ship
*/

function countBattleships(board) {
	var m = board.length;
	if (m == 0) return 0;
	var n = board[0].length;

	var count = 0;

	for (var i = 0; i < m; i++) {
		
		for (var j = 0; j < n; j++) {
			if (board[i][j] == '.') continue;
			if (i > 0 && board[i-1][j] == 'X') continue;
			if (j > 0 && board[i][j-1] == 'X') continue;
			count++;
		
		}
	}

	return count;
}

var a = [
"X..X",
"...X",
"...X"];

var b = [
"...X",
"XXXX",
"...X"];

console.log(countBattleships(a))

/*
	iterate through the rows, when you get to an x check if it's horizontal or verticle
	
	When I find a "X", i figure out if it is a horizontal or verticle ship. Then I treat it accordingly.
	I use loop to find it's extents, if it is touching other ships then I return false.

	https://leetcode.com/problems/battleships-in-a-board/
	misunderstood the questions, this one takes a board and if then returns the number of ships if it is valid
*/

var countBattleships = function(board) {
	var ships = [];
	var shipCount = 0;
	for(var i = 0; i < board.length ; i++) {
		for(var w = 0; w < board[i].length; w++) {
			var current = board[i][w];

			if (current === "X" && ships.indexOf(i + "" + w) === -1) {
				
				var isHoriz = false;
				var isVert = false;
				
				if (board[i][w + 1] === "X") {
					isHoriz = true;
				}

				if (board[i + 1] && board[i + 1][w] === "X") {
					isVert = true;
				}
				
				var col = i;
				var row = w;
				
				while(board[col][row] === "X") {
					ships.push(col + "" + row);
					if (isHoriz && isVert) {
						return false;
					} else if (isHoriz) {
						
						if(board[col + 1] && board[col + 1][row] === "X") {
							return false;
						}

						row += 1;
					} else if (isVert) {
						
						if (board[col][row - 1] === "X" || board[col][row + 1] === "X") {
							return false;
						}
						if(board[col + 1]) {
							col += 1;
						} else {
							break;
						}
					
					} else { //one tile ship
						break;
					}
					
				}
				
				shipCount += 1;
			
			}
		}
	}
	return shipCount;
};

// console.log(countBattleships(a));