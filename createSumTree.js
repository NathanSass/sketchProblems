function Node(value) {
	this.left = null;
	this.right = null;
	this.value = value;
}

var a = new Node(10);
var b = new Node(-2);
var c = new Node(6);
var d = new Node(8);
var e = new Node(-4);
var f = new Node(5);
var g = new Node(7);
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
c.left = g;

/*
Do a traversal of the given tree. In the traversal, store the old value of the current node, recursively call for left and right subtrees and change the value of current node as sum of the values returned by the recursive calls. Finally return the sum of new value and value (which is sum of values in the subtree rooted with this node).
http://www.geeksforgeeks.org/convert-a-given-tree-to-sum-tree/
*/

function createSumTree(node) {

	if (node === null) { // basecase
		return 0;
	}
	var initialValue = node.value;

	node.value = createSumTree(node.left) + createSumTree(node.right)

	return node.value + initialValue;
}

function printInOrder(node) {
	if (node === null) {
		return;
	}
	printInOrder(node.left);
	console.log(node.value + " ");
	printInOrder(node.right);
}

createSumTree(a);

printInOrder(a);