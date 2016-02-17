/*
Problem:
A child is running up a staircase with n steps, and can hop either 
1 step, 2 steps, or 3 steps at a time. Implement a method to count 
how many possible ways the child can run up the stairs.

*/


function countWays(steps) {
	if (steps <= 1 ) {
		return steps;
	} else {
		return countWays(steps - 1) + countWays(steps - 2) + countWays(steps - 3);
	}
}

// console.log("For 1 stair: " + countWays(1));
console.log(countWays(2));