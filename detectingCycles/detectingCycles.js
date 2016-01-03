// https://www.codeeval.com/open_challenges/5/

var fs = require("fs");

fs.readFileSync('./data.txt').toString().split('\n').forEach(function(line){
	
	if (line !== "") {

		function detectCycles(chars, repeatedChars) {
			if (chars.length < 1) {
				return repeatedChars;
			} else {
				var current = chars.shift();
				if (chars.indexOf(current) > -1 &&
					repeatedChars.indexOf(current) == -1) {
					
					repeatedChars.push(current);
				}
				return detectCycles(chars, repeatedChars);
			}
		}

		var numArr = line.split(/\s+/).map(function(number) {
			return parseInt(number, 10);
		});
		
		var cycle = detectCycles(numArr, []);
		
		console.log( cycle.join(" ") );
	}

});
