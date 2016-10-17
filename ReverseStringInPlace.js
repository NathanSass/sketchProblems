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


console.log(reverseInPlace("abcde") === "edcba");