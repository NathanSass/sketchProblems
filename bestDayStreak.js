/*
	create an array of just the indexes and then find the one with the lowest distances
*/
function betterDayStreak(arr) {
	var arrOfBest = [];
	// create an array that is just the positions of the best items
	for(var i = 0; i < arr.length; i++) {
		if(arr[i] == 1) {
			arrOfBest.push(i);
		}
	}
	var minDist = 10000;
	var bestI = null;
	// go through each of the best positions and find the items that are closest together
	for(var j = 0; j < arrOfBest.length - 3; j++) {
		if( (arrOfBest[j + 2] - arrOfBest[j]) < minDist ){
			minDist = arrOfBest[j + 3] - arrOfBest[j];
			bestI = j;
		}
	}

	return arrOfBest[bestI]
}


function bestDayStreak(arr) {
	var bestIndex = null;
	var currentMinGap = arr.length;
	for(var i = 0; i < arr.length; i++) {
		if(arr[i] == 0) {continue;}
		var itemsSeen = 1;
		for(var j = i + 1; j < arr.length; j++) {
			if(arr[j] == 1) {
				itemsSeen += 1
			}
			if(itemsSeen === 3) {
				break;
			}
		}
		
		if( j - i < currentMinGap && itemsSeen == 3) {
			currentMinGap = j - i;
			bestIndex = i;
		}
	}

	return bestIndex
}
var arr = [0, 1, 0, 1, 1, 1, 0, 0, 1];
console.log(betterDayStreak(arr))
// console.log(bestDayStreak(arr))
