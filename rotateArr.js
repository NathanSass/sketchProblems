/*
	need to modify item in place

	initialy used splice and concat, but concat returns a new object.

	complexity O(n) , O(1) no extra space used
*/

function rotateArr(arr, n) {
	n = n % arr.length;
	for(var i = 0; i < n; i++) {
		var item = arr.pop();
		arr.unshift(item);
	}
}

var a = [1,2,3,4,5,6,7];
console.log(rotateArr(a, 3));