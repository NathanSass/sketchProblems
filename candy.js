function findCandy_second(scores) {
	if (scores == null || scores.length == 0){
		return 0;
	}
	var candies = [];

	for (var i = 0; i < scores.length; i++) {
		candies[i] = 1;
	}
	
	for(var i = 1; i < scores.length; i++) {
		if(scores[i] > scores[i - 1]) {
			candies[i] = candies[i - 1] + 1;
		}
	}

	for(var i = scores.length - 2; i >= 0; i--) {
		if (scores[i] > scores[i + 1] && candies[i] < candies[i + 1] + 1) {
			candies[i] = candies[i + 1] + 1;
		}
	}

	return candies.reduce(function(a, b){
		return a + b;
	}, 0);

}

var a = [3, 1, 5, 4, 3, 2];
var c = [4, 2, 3, 4, 1] //9
var d = [1, 3, 4, 3, 2, 1] //13
/*
			// 1  1  1  1  1  1    arr creation
			// 1  2  3  1  2  1    forwards
			// 1  2  4  3  2  1    backwards

			 //1  2  4  3  2  1
*/
console.log(findCandy_second(d));



function findCandyAmount(scores) {
	var curCandyAmt = 1;
	var startOfDesc = -1;
	var candyArr = [1]

	for (var i = 1; i < scores.length; i++) {
		var score = scores[i];
		var lastScore = scores[i - 1];

		if (score < lastScore) { //desc
			if (startOfDesc == -1 ) { // find beg of desc. sequence
				startOfDesc = i - 1;
				if (curCandyAmt > 1) { // kinda janky but we need a case where it steps all the way back down to 1 ex. scores 1,2,3,4,2 (need to give last person 1 piece)
					curCandyAmt = 2;
				}
			}

			if (curCandyAmt > 1) {
				curCandyAmt -= 1;
				candyArr.push(curCandyAmt)
			} else { // we are on a desc. sequence with no candies to give
				
				// go back and add 1 to each candy
				candyArr.push(0); // will push a 0 on, it will get incremented in the function
				for(var j = startOfDesc; j <= i; j++) {
					candyArr[j] += 1;
				}
				// i =- 1;
				// continue;
			}

		} else if ( score == lastScore) {
			startOfDesc = -1;
			curCandyAmt = 1;
			candyArr.push(curCandyAmt);
		
		} else { 
			curCandyAmt += 1;
			startOfDesc = -1;
			candyArr.push(curCandyAmt);
		}
	}

	return candyArr.reduce(function(a, b){
		return a + b;
	}, 0);
}

/*
	This is a tricky problem that does better with dynamic programming. Downward descending sequences create situations where
	we need to loop back and increment all values up by one. By going through the loop once and then going back through it, we can update values
	based upon the the runs in a forward direction.
*/

// var a = [3, 1, 5, 4, 3, 2];
// var c = [4, 2, 3, 4, 1] //9
// var d = [1, 3, 4, 3, 2, 1] //13

// 			 //1  2  4  3  2  1
// console.log(findCandyAmount(d));

// scores
// 1 2 2
// 1 2 1


// 1 2 5 4 3 2 5
// 1 2 4 3 2 1 2

// 3 1 5 4 3 2
// 2 1 4 3 2 1

/* 
track current candy amount
track beg of last descending sequence
loop through scores
	if current > last
		give more candy to next kid
		set descending = -1 
	else
		if (desc != -1) // still on a descending sequence

		if you can de-increment candy do that
		else
			go back to last desc index and add one
*/
