
function numOfWaysToMakeSubset(amountLeft, denom, i) {
	var currentDenom = denom[i];
	var combos = []
	if (amountLeft === 0) {
		return 1;
	}

	if (amountLeft < 0) {
		return 0;
	}

	if (i >= denom.length) { return 0 }

	var possibilities = 0;
	while (amountLeft >= 0 ) {
		var currentPos = numOfWaysToMakeSubset(amountLeft, denom, i+ 1);
		possibilities += currentPos
		
		amountLeft -= currentDenom;
		if (amountLeft >= 0) {
			combos.push(currentDenom)
			
		}

	}

	console.log(combos)
	return possibilities
}

function arrSum(arr) {
	return arr.reduce(function(a,b) {
		return a + b;
	}, 0);
}

var arr = [3, 34, 4, 12, 5, 2];
arr = arr.sort(function(a,b) {return a > b});

// numOfWaysToMakeSubset(arr, a, 0)
console.log(numOfWaysToMakeSubset(4, [1, 2], 0))
