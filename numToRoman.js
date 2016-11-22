function numToRoman(input) {
	var amounts = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
	var roman = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
	
	var result = "";
	var remainder = input;
	for (var i = 0; i < amounts.length; i++) {
		var curDivisor = amounts[i];
		if (curDivisor > remainder) { continue; };
		if (remainder === 0){ break; }
		while (remainder >= curDivisor) {
			result += roman[i];
			remainder -= curDivisor;
		}
	}
	return result
}

console.log(numToRoman(5) == "V");
console.log(numToRoman(4) == "IV");
console.log(numToRoman(1) == "I");
console.log(numToRoman(450) == "CDL");
console.log(numToRoman(9) == "IX");
console.log(numToRoman(40) == "XL");

/*
	I began here trying to build the roman numbers by subtracting but the single amounts for the total, and when there was
	more than three repetition, I would use the larger value;

	The bug occured on number like 10 because my alg would build it as VIV not IX, turns out logic didn't quite work for building
	on a granular scale. So switching to an array of already built values simplified thing.
*/