/*
	return two elements in the array that equal the exact integer.
	optimize for runtime over memory usage

	- A brute force would be a using a double loop and then finding every possible combination and seeing if ehy match
	- Could also orgainze the data and then do some sort of memoization
*/

function inFlightMovie(flightLength, movieArr) { // O(n^2)
	for (var i = 0; i < movieArr.length; i++) {
		var firstMovie = movieArr[i];

		for (var j = 0; j < movieArr.length; j++) {
			if (j === i) {
				continue;
			}

			var secondMovie = movieArr[j];

			if (secondMovie + firstMovie === flightLength) {
				return true;
			}

		}
	}
	return false;
}

function inFlightMovie_memo(flightLength, movieArr) {

	var movieCache = [];
	for (var i = 0; i < movieArr.length; i++) {
		var firstMovie = movieArr[i];

		for (var j = 0; j < movieArr.length; j++) {
			if (j === i) {
				continue;
			}

			var secondMovie = movieArr[j];

			movieCache[firstMovie + secondMovie] = true;

		}
	}

	if (movieCache[flightLength] === undefined) {
		return false;
	} else {
		return true;
	}
}

function inFlightMovie_opt1(flightLength, movieArr) { // there is some unnessary sorting etc, and checking for indexes
	var sortedMovies = movieArr.sort();

	for (var i = 0; i < sortedMovies.length; i++) {
		var currentMovie = movieArr[i];
		var neededMovie = flightLength - currentMovie;
		var indexOfNeeded = sortedMovies.indexOf(neededMovie)
		if (indexOfNeeded >= 0 && indexOfNeeded != i) {
			return true;
		}
	}

	return false;
}

/*
	This solution leverages a hashmap type solution for quick lookups and regular time
	A default answer should be, can I save time by using a hashmap
*/

function inFlightMovie_opt2(flightLength, movieArr) {
	var seenMoves = [];
	for (var i = 0; i < movieArr.length; i++) {
		var currentMovieLength = movieArr[i];
		var neededMovieLength = flightLength - currentMovieLength;
		if (seenMoves.indexOf(neededMovieLength) >= 0) {
			return true;
		}
		seenMoves.push(currentMovieLength);
	}

	return false;
}

var movieArr = [1, 2, 3, 4];
console.log( inFlightMovie_opt2(7, movieArr) === true);
console.log( inFlightMovie_opt2(8, movieArr) === false);
console.log( inFlightMovie_opt2(1, movieArr) === false);
console.log( inFlightMovie_opt2(0, movieArr) === false);




