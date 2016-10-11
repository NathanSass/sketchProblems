/*
input: "12 + 2"
output: 3

["12", "+", "2"]


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



























// function primeFactors(n) {
// 	var factors = [],
// 		divisor = 2;

// 	while (n > 2) {
// 		if (n % divisor == 0) {
// 			factors.push(divisor);
// 			n = n / divisor;
// 		} else {
// 			divisor ++;
// 		}
// 	}

// 	return factors;
// }
// // 1, 1, 2, 3, 5, 8, 11, 19
// function fibonacci(n) {
// 	var result = [1,2];
// 	while(result.length <= n) {
// 		var newFibo = result[result.length - 1] + result[result.length - 2];
// 		result.push(newFibo);
// 	}

// 	return result[n -1];
// }

// function fibonacci_r(n) {
// 	if(n <= 1) {
// 		return n;
// 	} else {
// 		return fibonacci(n - 1) + fibonacci(n - 2);
// 	}
// }

// primeFactors(69);
// console.log(fibonacci(11));
// console.log(fibonacci_r(5));