var fs  = require("fs");

function maxEarnings(arr, days) {
	var max = 0;

	arr.forEach(function(startDay, startI, dayArr){
		
		var currentRun  = startDay;

		var daysInvested = 0;
		
		if (dayArr.length >= (startI + days)) { // won't bother counting if array is too short anyway
			
			var j = 1;
			while (j < days) {
				var indexToAdd = startI + j;

				currentRun += dayArr[indexToAdd];

				j ++;
			}

			if (currentRun > max) {
				max = currentRun;
			}

		}

	});
	
	return max;
}


fs.readFileSync('./inputData.txt').toString().split('\n').forEach(function (line) {
    if (line !== "") {
		var stockMarket =  line.split(' ');
		var unMashItems = stockMarket.shift().split(';');

		var numDays		= parseInt(unMashItems.shift(), 10);

		stockMarket = unMashItems.concat(stockMarket)
								.map(function(num){
									return parseInt(num, 10);
								});
		
		console.log( maxEarnings(stockMarket, numDays ));

    }
});

// var stockMarket = [7, -3, -10, 4, 2, 8, -2, 4, -5, -2]; // days 5, final 16
// var numDays = 5;

// var stockMarket = [ -4, 3, -10, 5, 3, -7, -3, 7, -6, 3 ]; // days 6, final 0
// var numDays = 6;

// var stockMarket = [ -7, 0, -45, 34, -24, 7 ]; // days 3, final 17
// var numDays = 3;

// console.log( maxEarnings(stockMarket, numDays ))
