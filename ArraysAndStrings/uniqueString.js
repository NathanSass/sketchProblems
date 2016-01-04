// Implement an algorithm to determine if a string
// has all unique characters. What if you cannot use
// additional data structures?
// p. 73

var sample = ["The quick brown fox jumps over the lazy dog", "hello", "teststringfunction", "anx", "Uniqe"];

function isUnique(str,idx){
	if (idx >= str.length -1) return true;
	
	for (var i = 0; i < str.length; i++) {
		
		if (str[idx] === str[i] && i !== idx && str[idx] !== " ") {
			return false;
		}
	
	}
	
	return isUnique(str, idx + 1);
}

sample.map(function(line) {
	var str = line.toLowerCase();
	console.log( isUnique(str, 0) );
});