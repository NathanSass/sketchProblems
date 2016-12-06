function getNumIslands(board) {
  var islands = 0;
  var checked = [];
  for(var i = 0; i < board.length; i++) {
    var row = board[i];
    for (var j = 0; j < board[i].length; j++) {
      var item = row[j];
      
      if ( item === 1 && checked.indexOf(i + "" + j) === -1) {
       // find all orthogonal neighbors
        // add them to checked
        islands += 1;
        // console.log("checked " + checked)
        
        function findNeighbors(i, j) {
          
          checked.push(i + "" + j);
          
          if( board[i][j - 1] === 1  && checked.indexOf(i + "" + (j - 1 )) == -1) {
            findNeighbors(i, j - 1)
          }
          
          if ( board[i][j + 1] === 1 && checked.indexOf(i + "" + (j + 1 )) == -1) {
            findNeighbors( i, j + 1 )
          }
          
          if ( board[i - 1] && (board[i - 1][j] === 1) && checked.indexOf((i - 1) + "" + j) == -1) {
            findNeighbors( i - 1, j )
          }
          
          if ( board[i + 1] && board[i + 1][j] === 1 && checked.indexOf((i + 1) + "" + j) == -1) {
            findNeighbors(i + 1, j );
          }
        }
        
        findNeighbors(i, j);
      }
    }
  }
  
  return islands;
}

var land = [[0, 1, 0],
            [1, 1, 0],
            [0, 0, 1]];

console.log(getNumIslands(land))