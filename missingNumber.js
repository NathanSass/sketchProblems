/*

[0, 1, 3] return 2

expected: 0 + 1 + 2 + 3 = 6
actual: 0 + 1 + 3 = 4

*/
function missingNumberBetter3(arr) { //102ms
	var sum = arr.reduce((a, b)=>a + b);
	var n = arr.length;
	return (n * (n + 1) )/ 2 - sum;
}

function missingNumberBetter2(arr) { //109ms
	var lookup = {};
	for(var i = 0; i < arr.length; i++) {
		lookup[arr[i]] = true;
	}
	for(var i = 0; i < arr.length; i++) {
		if( lookup[i] == undefined) {
			return i;
		}
	}
	return i;
}

function missingNumberBetter1(arr) { //616ms
	for(var i = 0; i < arr.length; i++) {
		if( arr.indexOf(i) === -1) {
			return i;
		}
	}
	return i;
}

function missingNumberBetter(arr) { //152ms
	arr = arr.sort(function(a, b){
		return a - b;
	});
	for(var i = 0; i < arr.length; i++) {
		if( arr[i] !== i) {
			return i;
		}
	}
	return i;
}

function missingNumBrute(arr) {
	var expected = 0;
	var actual = 0;
	for(var i = 0; i < arr.length; i++) {
		actual += arr[i];
		expected += i;
	}
	expected += i;

	return expected - actual;
}

// console.log(missingNumberBetter([0, 1, 3]) == 2);
// console.log(missingNumberBetter([0, 1, 2, 3, 5])== 4);
var z = [45,35,38,13,12,23,48,15,44,21,43,26,6,37,1,19,22,3,11,32,4,16,28,49,29,36,33,8,9,39,46,17,41,7,2,5,27,20,40,34,30,25,47,0,31,42,24,10,14];
console.log(missingNumberBetter3(z));




