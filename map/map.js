function timesTwo(x) { return x * 2}

function map(array, func){
	var result = [];

	for (var i = 0; i < array.length; i++){
		result.push(func(array[i]))
	}
	return result;
}

arr = [1,2,3,4]
console.log(map(arr, timesTwo));
