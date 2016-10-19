// Case: even length
// a b c d
// d b c a
// d c b a

// Case: odd length
// a b c d e
// e b c d a
// e d c b a

function reverseNotInPlace(string) {
	return string.reverse();
}

String.prototype.reverse = function() {
	return this.split("").reverse().join("");
};

function reverseInPlace(string) {
	var chars = string.split("");
	// we only need iterate over half of the array
	var maxI = Math.ceil(string.length / 2);
	var length = string.length;

	for (var i = 0; i < maxI; i++) {
		// swap beginning with end
		var swapHead = chars[i];
		var swapTail = chars[length - i];
		
		chars[i] = swapTail;
		chars[length - i] = swapHead;
	}

	return chars.join("");
}

function reversePhrase(string) { // Better to reverse the string, then reverse each word
	var wordsArr = string.split(" ");
	var length = wordsArr.length
	var maxI = Math.ceil(length / 2)

	for (var i = 0; i <= maxI; i++) {
		var swapHead = wordsArr[i];
		var swapTail = wordsArr[length - i]

		wordsArr[i] = swapTail
		wordsArr[length - i] = swapHead
	}

	return wordsArr.join(" ");
}


var message = 'find you will pain only go you recordings security the into if'
console.log(reversePhrase(message)); 

console.log(reverseInPlace("abcde") === "edcba");








