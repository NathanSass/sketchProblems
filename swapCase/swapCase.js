function swapCase(line) {
	var phrase = "";
	for (var i = 0; i < line.length; i++) {
		var currentLetter = line[i];
		if (currentLetter === currentLetter.toUpperCase()) {
			phrase += currentLetter.toLowerCase();
		} else {
			phrase += currentLetter.toUpperCase();
		}
	}
	return phrase
}

console.log(swapCase("Sw4P mEe!") === 'sW4p MeE!');