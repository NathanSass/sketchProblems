/*
https://leetcode.com/problems/house-robber-iii/

keep track of values on each level
*/

function TreeNode(val) {
	this.val = val;
	this.left = this.right = null;
}

function findRobbable(root) {
	var a = 0;
	var b = 0;
	if (!root) { return 0; }

	function recurse(node, levelA) {
		if (!node) { return; }

		if (levelA) {
			a += node.val;
		} else {
			b += node.val;
		}

		recurse(node.right, !levelA);
		recurse(node.left, !levelA);


	}

	recurse(root, true);

	return Math.max(a, b);
}
[4,1,null,2,null,3]

var a = new TreeNode(4);
var b = new TreeNode(1);
var c = new TreeNode(2);
var d = new TreeNode(3);


// /* */
// var a = new TreeNode(3);
// var b = new TreeNode(2);
// var c = new TreeNode(3);
// var d = new TreeNode(3);
// var e = new TreeNode(1);

// a.left = b;
// a.right = c;
// b.right = d;
// c.right = e;
// /* */
console.log(findRobbable(a));