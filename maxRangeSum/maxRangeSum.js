function maxEarnings(arr) {
	var max = 0;

	arr.forEach(function(startDay, startI, dayArr){
		var currentRun = startDay;

		for( var day = startI + 1; day < dayArr.length; day++) {
			currentRun += dayArr[day];
			if (currentRun > max){
				max = currentRun;
			}
		}

	});

	return max;
}


var fs  = require("fs");

fs.readFileSync('./inputData.txt').toString().split('\n').forEach(function (line) {
    if (line !== "") {
	var stockMarket =  line.split(' ');
	var unMashItems = stockMarket.shift().split(';');

	var numDays		= unMashItems.shift();

	stockMarket = unMashItems.concat(stockMarket)
							.map(function(num){
								return parseInt(num, 10);
							});
        console.log(numDays, ' --- ',stockMarket);
        // console.log(numDays, '  line: ', line);
    }
});

