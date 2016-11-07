function maxDuffelBagValue(cakeTypes, capacity) {

	var cakeValsByWeight = [];
	for (var i = 0; i <= capacity; i++) {
		cakeValsByWeight[i] = 0;
	}

	for(var weight = 0; weight <= capacity; weight++) {
		var maxValForWeight = 0;

		for(var i = 0; i < cakeTypes.length; i++) {
			var currentCake = cakeTypes[i]
			if (currentCake.weight > weight) { break;}
			var valForCake = Math.floor(weight / currentCake.weight) * currentCake.value;
			var remainder = weight % currentCake.weight;
			var remainderVal = cakeValsByWeight[remainder];
			var maxForCakeType = valForCake + remainderVal;

			maxValForWeight = Math.max(maxValForWeight, maxForCakeType);
		}

		cakeValsByWeight[weight] = maxValForWeight;
	}

	return cakeValsByWeight[capacity];

}


var cakeTypes = [
    {weight: 2, value: 15},
    {weight: 3, value: 90},
    {weight: 7, value: 160},
];

var capacity = 20;

console.log(maxDuffelBagValue(cakeTypes, capacity));
console.log(maxDuffelBagValue(cakeTypes, 2));