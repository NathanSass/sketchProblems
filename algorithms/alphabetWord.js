var word = ["d", "y", "x", "f", "b", "s"]

function alphabetize(arr){
	var notSorted = true

	while(notSorted){
		notSorted = false
		for(var i=0; i < arr.length; i++){
			var first = arr[i]
			var second = arr[i + 1]
			if(first > second){
				arr[i] = second
				arr[i + 1] = first
				notSorted = true
			}
		}
	}
	return arr
}

console.log(alphabetize(word))
