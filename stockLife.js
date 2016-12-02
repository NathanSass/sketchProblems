function maxProfN(arr) {
	var min = 10000;
	var maxProf = 0;
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] < min) {
			min = arr[i];
		} else if (arr[i] - min > maxProf) {
			maxProf = arr[i] - min;
		}
	}

	return maxProf;
}


function maxProf(arr) {
	var profitMax = 0;
	for(var i = 0; i < arr.length; i++) {
		var buyDay = arr[i];
		for(var j = i + 1; j < arr.length; j++) {
			var sellDay = arr[j];
			var profit = sellDay - buyDay;
			profitMax = Math.max(profitMax, profit);
		}
	}

	return profitMax;
}

var a = [7, 1, 5, 3, 6, 4];
console.log(maxProf(a) === maxProfN(a));