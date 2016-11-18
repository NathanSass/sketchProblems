var myMaze = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
    [1, 1, 1, 0, 1, 0, 0, 1, 1, 1],
    [0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
    [0, 1, 1, 1, 1, 0, 1, 1, 1, 0],
    [0, 1, 0, 0, 1, 0, 1, 0, 1, 0],
    [0, 0, 0, 0, 1, 1, 1, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 2],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

function MazeSolver(maze) {
 
  this.maze = maze;

  this.path = [];
  this.traverse = function(row, column) {
    if(this.maze[row][column] == 2) {
      console.log("We solved the maze at (" + row + ", " + column + ")");
      console.log(this.path);
      return;
    } else if( this.maze[row][column] == 1 ) {
      this.path.push("[" + row + "," + column +"]");
      this.maze[row][column] = 9;
      if(row < this.maze.length - 1) {
        this.traverse(row + 1, column);
      }
      if(column < this.maze[row].length - 1) { // would work for a non square maze
        this.traverse(row, column + 1);
      }
      if(row > 0) {
        this.traverse(row - 1, column);
      }
      if(column > 0) {
        this.traverse(row, column - 1);
      }
    }
  };
}

var MazeSolver = new MazeSolver(myMaze);
MazeSolver.traverse(3, 0)