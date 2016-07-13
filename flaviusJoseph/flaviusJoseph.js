
function flaviusJoseph(peopleAlive, interval){
	var result = [];
	var firstIteration = true;
	var pointer = 0;
	var victim;

	while (peopleAlive.length) {

		if (firstIteration) {
			pointer = interval - 1;
			victim = peopleAlive.splice(pointer, 1)[0];
			result.push(victim);
		}


		if (firstIteration) {
			pointer += interval - 1;
			
		} else {
			
			if (peopleAlive.length <= interval) {
				
				pointer = interval - pointer;
				
				if (peopleAlive.length === 1) {
					pointer = 0;
				} else if ( pointer >= peopleAlive.length ) {
					pointer = pointer - 1;
				} 
			
			} else if ( pointer + interval <= peopleAlive.length) {
				pointer += interval - 1;
			} else {
				pointer = ( pointer + interval) - peopleAlive.length - 1;
			}
		
		}
		

		victim = peopleAlive.splice(pointer, 1)[0];
		result.push(victim);
		

		firstIteration = false;

	}

	return result;
}

console.log(flaviusJoseph( [0, 1, 2, 3, 4], 2 ));
console.log(flaviusJoseph( [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 3 ));