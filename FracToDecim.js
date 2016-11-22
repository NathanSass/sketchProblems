function fracToDec(numerator, denominator) {
	if (numerator == 0) {
		return "0";
	}
	var res = "";
	// if one is negative, answer will be negative
	var sign = (numerator < 0 == denominator < 0 || numerator == 0) ? "" : "-";
	res += sign;
	
	var num = Math.abs(numerator);
	var den = Math.abs(denominator);

	res += Math.floor(num / den);

	num %= den; // get integer
	if (num == 0) {
		return res;
	}

	// get fractional
	res += ".";
	var map = {};
	map[num] = res.length; // keep of track for the index

	while (num !== 0) {
		num *= 10;
		res += Math.floor(num / den);
		num %= den;
		if (num in map) {
			var index = map[num];
			res = [res.slice(0, index), "(", res.slice(index), ")"].join("");
			break;
		} else {
			map[num] = res.length;
		}
	}

	return res;
}

console.log(fracToDec(2, 3))
console.log(fracToDec(-50, 8))