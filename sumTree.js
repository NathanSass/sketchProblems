function Node(value) {
	this.left = null;
	this.right = null;
	this.value = value;
}

var a = new Node(26);
var b = new Node(10);
var c = new Node(3);
var d = new Node(4);
var e = new Node(6);
var f = new Node(3);
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

/*
	Iterative O(n2) solution. Starts at the first node and get the sum of the left subtree, then right subtree. If they are equal, it adds the children then continues. Analysis: bad runtime, good thing is it exists on first break. Improvement: could start at root and work way up, and only go through it once
	http://www.geeksforgeeks.org/check-if-a-given-binary-tree-is-sumtree/
*/

function isSumtree(node) {
	var leftSum = 0;
	var rightSum = 0;
	var nodesToCheck = [node]
	var currentNode = null;

	while (nodesToCheck.length > 0) {
		currentNode = nodesToCheck.pop();
		if (currentNode.left === null && currentNode.right === null) { continue; } //Case: end of tree
		leftSum = getSum(currentNode.left)
		rightSum = getSum(currentNode.right)

		if (leftSum + rightSum === currentNode.value) {
			if (currentNode.left !== null) {
				nodesToCheck.push(currentNode.left)
			}

			if (currentNode.right !== null) {
				nodesToCheck.push(currentNode.right)
			}
			console.log(currentNode.value)
		} else {
			console.log("left: " + leftSum + "  right: " + rightSum + " != " + currentNode.value)
			return false;
		}
	}

	return true;
}

function getSum(node) {
	var sum = 0;
	var nodesToCheck = [node]
	var currentNode = null;
	while(nodesToCheck.length > 0) {
		currentNode = nodesToCheck.pop();
		if (currentNode === null) { continue; }
		sum += currentNode.value;
		if (currentNode.left !== null) {
			nodesToCheck.push(currentNode.left)
		}
		if (currentNode.right !== null) {
			nodesToCheck.push(currentNode.right)
		}
	}

	return sum;

}

console.log(isSumtree(a));


