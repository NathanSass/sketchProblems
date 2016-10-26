function deletion_distance(str1, str2) {

	var minLength = Math.min(str1.length, str2.length);
    
    for(var i = 0; i < str1.length; i++) { // Finds substrings and finds the number of non matching chars
    	var substring = str1.substr(i, str1.length);
    	if (str2.indexOf(substring) >= 0) {
    		var new1 = str1.replace(substring, "");
    		var new2 = str2.replace(substring, "");

    		var possible = new1.length + new2.length;
    		return Math.min(minLength, possible);
    	}
    
    }

    var matchCount = 0; // Checks there is at least one common letter
    for(var i = 0; i < str1.length; i++) {
    	var c = str1[i];
    	if(str2.indexOf(c) >= 0) {
    		matchCount = 1;
    	}
    }

	return minLength - matchCount;
}



console.log(deletion_distance("at", "cat"));
console.log(deletion_distance("thought", "sloughs"));