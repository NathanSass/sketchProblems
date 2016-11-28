function TreeNode(val) {
	this.val = val;
	this.left = null;
	this.right = null;
}

var a = new TreeNode(1);
var b = new TreeNode(2);
var c = new TreeNode(3);

a.right = b;
b.left = c;

/*
	https://leetcode.com/problems/binary-tree-preorder-traversal/
	uses only one array to keep track of lefts
*/

function preordal_iter2(node) {
	var path = [];
	var rights = [];

	while (node != null) {
		path.push(node.val);
		if(node.right != null) {
			rights.push(node.right);
		}
		node = node.left;
		if (node == null && rights.length > 0){
			node = rights.pop();
		}
	}

	return path;
}

console.log(preordal_iter2(a));

/*
	Didn't pass all of the cases
	Keeps track of left and right nodes.
	Chooses left with priority
	was able to optimize out of this by only using the one stack when the lefts are empty.
*/

function preordal_iterative(head) {
	var leftNodes = [];
	var rightNodes = [];
	var path = [];
	
	if (head instanceof TreeNode) {
		leftNodes.push(head);
	}

	while(leftNodes.length > 0 || rightNodes.length > 0) {
		var currentNode;
		// prioritize searching left
		if( leftNodes.length > 0) {
			currentNode = leftNodes.pop()
		} else {
			currentNode = rightNodes.pop()
		}
		// record the current value
		path.push(currentNode.val);

		// save the right value before currentNode gets changed
		if (currentNode.right instanceof TreeNode) {
			rightNodes.push(currentNode.right);
		}

		// search down left subtree
		while(currentNode.left instanceof TreeNode) {
			// avoid falling into loops of already visited values. not sure if I need this
			if (path.indexOf(currentNode.left.val) != -1) { break; }
			currentNode = currentNode.left;
			leftNodes.push(currentNode);
		}

	}

	return path;
}

console.log(preordal_iterative([]));


function preordalTrav(input, arr) {
	if (!arr) {
		arr = [];
	}
	arr.push(input.val)
	if( input.left ){
		preordalTrav(input.left, arr)
	}
	if( input.right ){
		preordalTrav(input.right, arr)
	}
	return arr;
}


// console.log(preordalTrav(a));