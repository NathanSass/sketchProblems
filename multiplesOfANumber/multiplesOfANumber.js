var fs  = require("fs");

/*
	Given numbers x and n, where n is a power of 2,
	print out the smallest multiple of n which is greater than or equal to x.
	Do not use division or modulo operator.

	https://www.codeeval.com/open_challenges/18/
*/




function smallestMult( x, n ) {
	var result = 0;
	while (result < x) {
		result += n;
	}
	return result;
}

fs.readFileSync('./inputData.txt').toString().split('\n').forEach(function (line) {
    if (line !== "") {
		
		
		var data  =  line.split(',');
		var x = parseInt(data[0],10);
		var n = parseInt(data[1], 10);

		console.log(smallestMult(x, n) );

    }
});

/* Reflection
	Although listed as medium, it is very easy
	multiplying by 2 is the same as adding to itself.
*/