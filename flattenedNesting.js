var NestedIterator = function(nestedList) {
	this.list = this.flatten(nestedList);
};


NestedIterator.prototype.flatten = function(arr) {
	var result = [];

	function recurse(arr) {
		if (Array.isArray(arr)) {
			for(var i = 0; i < arr.length; i++) {
				recurse(arr[i]);
			}
		} else {
			result.push(arr);
		}
	}

	recurse(arr);
	return result;
};


/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function() {
    return this.list.length > 0;
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function() {
    return this.list.pop();
};


// var a = new NestedIterator([1,[4,[6]]]);

var i = new NestedIterator([[1,1],2,[1,1]]);
var a = [];
while (i.hasNext()) {
	a.push(i.next());
}
console.log(a);
