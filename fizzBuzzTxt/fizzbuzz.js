var fs = require("fs");
fs.readFileSync('./fizzData.txt').toString().split('\n').forEach(function(line){
	var result = '';
	if (line !== "") {
		var charArray = line.split(/\s+/);
		var highestCount = charArray[2];
		for (var i = 1; i < highestCount; i++) {
			switch (true) {
				case (i % charArray[0] === 0 && charArray[1] === 0): result += 'FB '; break;
				case (i % charArray[0] === 0): result += 'F '; break;
				case (i % charArray[1] === 0): result += 'B '; break;
				default: result += (i + ' '); break;
			}
		}
		console.log(result);
	}
});
