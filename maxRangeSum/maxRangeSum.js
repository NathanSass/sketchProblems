// function maxEarnings(arr) {
// 	var max = 0;

// 	arr.forEach(function(startDay, startI, dayArr){
// 		var currentRun = startDay;

// 		for( var day = startI + 1; day < dayArr.length; day++) {
// 			currentRun += dayArr[day];
// 			if (currentRun > max){
// 				max = currentRun;
// 			}
// 		}

// 	});

// 	return max;
// }

// var arr1 = [7, -3, -10, 4, 2, 8, -2, 4, -5, -2];

// console.log(maxEarnings(arr1));


var fs  = require("fs");

fs.readFileSync('./inputData.txt').toString().split('\n').forEach(function (line) {
    if (line != "") {
        //do something here
        console.log(line);
    }
});

