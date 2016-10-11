

function inPlaceShuffle (arr) {
	for(var i = 0; i < arr.length; i++) {
		var randomIndex = Math.floor(Math.random() * arr.length)
		var curentValue = arr[i];
		var swappedVal = arr[randomIndex];
		arr[randomIndex] = curentValue;
		arr[i] = swappedVal
	}
	return arr;
}

f


var arr = "8762451".split("");

console.log(inPlaceShuffle(arr));