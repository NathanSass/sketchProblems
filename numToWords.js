function wordsToNums(input) {
	if(input == 0){return "Zero"}
	var  inputArr = (input + "").split("");
	var ones = [null, "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"];
	var teens = "Ten Eleven Twelve Thirteen Fourteen Fifteen Sixteen Seventeen Eighteen Nineteen".split(" ");
	var tens = [null, "teen", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
	var bigs = [null, null, "Thousand", "Million", "Billion", "Trillion"];
	var output = "";

	while(inputArr.length > 0) { // 123
		
		var cutPoint = inputArr.length % 3;
		var suffixI = Math.ceil((inputArr.length )/ 3);
		if (cutPoint === 0) {
			cutPoint = 3;
		}
		var analyze = inputArr.splice(0,cutPoint).reverse();

		var onesWord = ones[parseInt(analyze[0])]
		var tensWord = tens[parseInt(analyze[1])]
		var hundredPlace = ones[parseInt(analyze[2])]
		var suffixWord = bigs[suffixI]

		if (hundredPlace) {
			output += hundredPlace + " Hundred "
		}
		if (tensWord == "teen") {
			output += teens[parseInt(analyze[0])] + " "

		} else {
			if (tensWord) {
				output += tensWord + " "
			}
			if (onesWord) {
				output += onesWord + " "
			}	
		}
		if (suffixWord && !(!onesWord && !tensWord && !hundredPlace)) { //Case 1, 000, 0000 one million not one million thousand
			output += suffixWord + " "
		}
	}

	return output.trim();
}

console.log(wordsToNums(123044)); //123 045