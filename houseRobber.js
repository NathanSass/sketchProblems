/*
https://leetcode.com/problems/house-robber-iii/

keep track of values on each level
optimal substructure + overlapping subproblems = dynamic solution
*/

function TreeNode(val) {
	this.val = val;
	this.left = this.right = null;
}

function rob(root) {
	var res = robSub(root);
	return Math.max(res[0], res[1]);
}


function robSub(root) {
	if (root === null) {
		return [0, 0];
	}

	var left = robSub(root.left);
	var right = robSub(root.right);

	var res = [0, 0];

	res[0] = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
	res[1] = root.val + left[0] + right[0];

	return res;
}

function findRobbable(root) {
	var levels = [];
	if (!root) { return 0; }

	function recurse(node, index) {
		if (!node) { return; }

		if(!levels[index]) {
			levels[index] = 0;
		}
		levels[index] += node.val
		
		index++;
		recurse(node.right, index);
		recurse(node.left, index);

	}

	recurse(root, 0);

	return levels;
}
// [4,1,null,2,null,3]

// var a = new TreeNode(4);
// var b = new TreeNode(1);
// var c = new TreeNode(2);
// var d = new TreeNode(3);


/* */
var a = new TreeNode(3);
var b = new TreeNode(2);
var c = new TreeNode(3);
var d = new TreeNode(3);
var e = new TreeNode(1);

a.left = b;
a.right = c;
b.right = d;
c.right = e;
/* */
console.log(rob(a));