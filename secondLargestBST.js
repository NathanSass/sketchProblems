// https://www.interviewcake.com/question/javascript/second-largest-item-in-bst?utm_source=weekly_email&utm_campaign=weekly_email&utm_medium=email
/*
	- second largest item can be either the largest item on left subtree.
	- Or the second largest item of the right subtree
	 - This can either be left most item of the largest subtree
	 - or the last item with no left subtree
*/

function secondLargest(node) {
	var leftNodes = [node.left]
	var rightNodes = [node.right] // 14
	var leftMax = 0; // 7
	var rightMax = 0; // 13

	// find largest item in left subtree
	while (leftNodes.length > 0) {
		var current = leftNodes.pop();
		if (current.left != null) {
			leftNodes.push(current.left);
		}

		if (current.right != null) {
			leftNodes.push(current.right)
		}

		// At a leaf node
		if (current.right == null && current.left == null) {
			leftMax = Math.max(leftMax, current.value)
		}
 	}

 	// find second largest item in right subtree
 	while (rightNodes.length > 0) {
 		var current = rightNodes.pop();

 		/* Case:
 			14
 			/
		  (13) <- want this
 		*/
 		if (current.right == null && current.left != null) {
 			rightMax = Math.max(rightMax, current.left.value)
 		}

 		/* Case:
			 (14) <- want this
			 	\
			 	16
 		*/
 		if (current.left == null && current.right != null) {
 			rightMax = Math.max(rightMax, current.value)
 		}

 		if (current.left != null) {
 			rightNodes.push(current.left)
 		}

 		if (current.right != null) {
 			rightNodes.push(current.right)
 		}
 	}

 	return Math.max(leftMax, rightMax);
}


 function BinaryTreeNode(value) {
    this.value = value;
    this.left  = null;
    this.right = null;
}

var a = new BinaryTreeNode(8)
var b = new BinaryTreeNode(3)

var c = new BinaryTreeNode(1)
var d = new BinaryTreeNode(6)

var e = new BinaryTreeNode(4)
var f = new BinaryTreeNode(7)

var g = new BinaryTreeNode(10)
var h = new BinaryTreeNode(14)

var i = new BinaryTreeNode(13)

a.left = b
a.right = g

b.left = c
b.right = d

d.left = e
d.right = f

g.right = h

h.left = i

console.log(secondLargest(a))















