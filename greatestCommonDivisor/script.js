/*
	Begin by taking two numbers
	and start from 2, increment up.
	If a number is divisible by both, then save it. 

	As an optimization could go top down.
*/

function greatestCommon(num1, num2) {
	var greatestCommonInt = 1;

	var minNumber = Math.min(num1, num2);

	for(var i = 2; i < minNumber; i++) {
		if ( (num1 % i === 0) && (num2 % i === 0)) {
			greatestCommonInt = i;
		}
	}

	return greatestCommonInt;
}

function greatestCommonTopDown(num1, num2) {
	var greatestCommon = 1;
	var minNum = Math.min(num1, num2)

	for (var i = minNum - 1; i > 0; i--) {
		if ( num1 % i === 0 
				&& num2 % i === 0 ) {
			
			return i;
		}
	}
}


// console.log(greatestCommon(14, 21));
// console.log(greatestCommon(69, 169));

console.log(greatestCommonTopDown(14, 21));
console.log(greatestCommonTopDown(69, 169));