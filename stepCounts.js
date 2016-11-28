function stepCounts(stepDenom, n) {
	var ways = []
	// fill array with zeros
	for(var i = 0; i <= n; i++){
		ways[i] = 0;
	}
	// There is 1 way to make 0
	ways[0] = 1;

	for(var i = 0; i < stepDenom.length; i++) {
		var stepType = stepDenom[i];

		for(var j = stepType; j <= n; j++) {
			var remainder = j - stepType;
			var remWays = ways[remainder];
			ways[j] += remWays;
		}
	}

	return ways[n];
}

var a = [1,3,5];
console.log(stepCounts(a, 5));