/* 
You rank players in the game from highest to lowest score. So far you're using an algorithm that sorts in 
O(nlgn) time, but players are complaining that their rankings aren't updated fast enough. You need a faster sorting algorithm.

Write a function that takes:

an array of unsortedScores
the highestPossibleScore in the game
and returns a sorted array of scores in less than 
O(nlgn) time.
https://www.interviewcake.com/question/javascript/top-scores

My Idea:
1. Add all scores to a hash table. Key is score, value is frequency that score appears. O(n) time
2. Loop through ints from 100 - 0, access the score hash and output the resoluts to a new scores array. O(1) time

O(n) time and O(n) space
Optimized for time but incurred some space costs.
*/

function sortScores(arr) {
	const HIGHEST_POSSIBLE_SCORE = 100;
	var scoreFreq = {};
	var sortedScores = [];
	// Add scores arr to scores hash
	for(var i = 0; i < arr.length; i++) {
		var s = arr[i];
		if (s in scoreFreq) {
			scoreFreq[s] += 1;
		} else {
			scoreFreq[s] = 1;
		}
	}

	// create a sorted scores arr
	for(var i = HIGHEST_POSSIBLE_SCORE; i >= 0; i--) {
		if (scoreFreq.hasOwnProperty(i)) {
			for(var j = 0; j < scoreFreq[i]; j++) {
				sortedScores.push(i);
			}
		}
	}

	return sortedScores;
}


var unsortedScores = [91, 37, 89, 41, 65, 91, 53];

console.log(sortScores(unsortedScores));
