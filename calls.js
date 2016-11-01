

function solution(S) {
    var callArr = S.split("\n");
  
    var promoNumber = findPromoNumber(callArr);

    return calcRates(callArr, promoNumber);
}

function calcRates(callArr, promoNumber) {
	var fiveMins = 5 * 60;
    var total = 0;
    var RATE = {
    	sec: 3,
    	min: 150
    };

	for(var i = 0; i < callArr.length; i++) {
    	var callData = callArr[i].split(",");
    	var callTime = calcTime(callData[0]);
    	var phoneNumber = callData[1];
    	
    	if (phoneNumber === promoNumber) { // promo number gets no charge
    		continue;
    	}

    	if (callTime < fiveMins) {
    		total += callTime * RATE.sec;
    	} else {
    		var roundUpInt = Math.ceil(callTime / 60);
    		total += roundUpInt * RATE.min;
    	}
    }

    return total;
}

function findPromoNumber(callArr) {
    var callTracker = {};
    
    for (var i = 0; i < callArr.length; i++) {
    	var callData = callArr[i].split(",");
    	var callTime = calcTime(callData[0]);
    	var phoneNumber = callData[1];

    	if (phoneNumber in callTracker) {
    		callTracker[phoneNumber] += callTime;
    	} else {
    		callTracker[phoneNumber] = callTime;
    	}
    }

    return findKeyWithMaxVal(callTracker);
}

function calcTime(timeS) {
	var timeArr = timeS.split(":");
	var hours = parseInt(timeArr[0], 10) * 60 * 60;
	var min = parseInt(timeArr[1], 10) * 60;
	var seconds = parseInt(timeArr[2], 10);

	return hours + min + seconds;
}

function findKeyWithMaxVal(obj) { // will only return 1 value, issue for a tie
	return Object.keys(obj).reduce(function(a, b){ 
		return obj[a] > obj[b] ? a : b ;
	});
}

var callS = '00:01:07,400-234-090\n00:05:01,701-080-080\n00:05:00,400-234-090' 

console.log(solution(callS));