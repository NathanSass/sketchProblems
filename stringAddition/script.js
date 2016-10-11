/*
	starts with a simple case of addition or subtraction
	stretch would be to implement some kind of multiplication that deals with orders of
	operation
*/

function evaluateStr(str) {

	var nums = str.split(/([+-])/);
	var result = parseInt(nums.shift());
	var operator = ""

	for(var i = 0; i < nums.length; i++) {
		var currentItem = nums[i];
		if ( !isNaN(parseInt(currentItem)) ) {
			currentItem = parseInt(currentItem);
			if ( operator == "-" ) {
				result -= currentItem
			} else if (operator == "+") {
				result += currentItem
			}

		} else {
			operator = currentItem.trim();
		}
	}
	
	return result
}


console.log(evaluateStr("   1 +     1 + 5"));
console.log(evaluateStr("4 -     1 + 5"));