var peopleAlive = [0, 1, 2, 3, 4];

var interval = 2;
var skip = interval - 1;



function flaviusJosepth(){
	var result = [];
	var firstIteration = true;
	var pointer = 0;
	var victim;
	var i = 4;
	// while (peopleAlive.length) {
	while (i) {


		if (firstIteration) {
			pointer = interval - 1;
			victim = peopleAlive.splice(pointer, 1)[0];
			result.push(victim);
		}


		if (firstIteration) {
			pointer += interval - 1;
			
		} else {
			if (peopleAlive.length <= interval) {
				pointer = peopleAlive.length - 1;
			}
			else if ( pointer + interval <= peopleAlive.length) {
				pointer += interval;
			} else {
				pointer = ( pointer + interval) - peopleAlive.length - 1;
			}
		
		}
		

		victim = peopleAlive.splice(pointer, 1)[0];
		result.push(victim);
		

		firstIteration = false;
		console.log(result);
		i -= 1;
	}

	return result;
}

console.log(flaviusJosepth());