/*
	Imagine a robot sitting on the upper left corner of an X by Y grid.
	The robot can only move in two directions: right and down.
	How many possible paths are there for the robot to go from (0,0) to (X,Y)?

	This is a permutation problem where MaxX is limited by maxY, and vice versa
	There will be maxX + maxY # of moves
	
	 _____ __
	|__|__|__|     (3,1) 
	|__|__|_X|

	down, right, right
	right, right, down,
	righ, down, right

	 ________
	|__|__|__|
	|__|__|__|
	|__|__|_X|

	 ___________
	|__|__|__|__|
	|__|__|__|__|
	|__|__|__|__|
	|__|__|__|_X|

	*/


function waysToTravel(maxX, maxY) {
	if (maxX <= 1) {
		return maxX
	}
}