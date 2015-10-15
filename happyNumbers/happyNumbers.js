var fs  = require("fs");

function happyNumber(num, pastArr) {
	
	var number = makeSquares(num);
	if(number == 1) {
		return 1;
	} else if (pastArr.indexOf(number) >= 0) {
		return 0;
	} else {
		pastArr.push(number);
		number += '';
		return happyNumber(number, pastArr);
	}

}

function makeSquares(num) {
	
	var numArr = num.split('');
	return numArr.reduce(function(total, numStr){
		var numInt = parseInt(numStr, 10);
		return total += (numInt * numInt);
	}, 0);

}

fs.readFileSync('./inputData.txt').toString().split('\n').forEach(function (line) {
    if (line !== "") {

		var numString = line;
		
		console.log(happyNumber(numString, []));
    }
});