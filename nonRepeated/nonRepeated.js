var p = console.log;

function nonRepeated(s) {
	var phrase = s.toLowerCase().split("");
	var usedLetters = '';
	while (phrase.length) {
		var currentLetter = phrase.shift();
		if ( phrase.indexOf(currentLetter) === -1 && usedLetters.indexOf(currentLetter) === -1 ) {
			return currentLetter;
		}
			usedLetters += currentLetter;
	}
}


p ( nonRepeated('yellow') === 'y' );
p ( nonRepeated('tooth') === 'h' );
