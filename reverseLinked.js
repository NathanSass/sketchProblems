function Node(val){
	this.val = val;
	this.next = null;
}

function reverse(head) {
	var prevNode = head; // a, b, c, d, e
	var currentNode = head.next // b, c, d, e, null
	prevNode.next = null;

	while( currentNode != null) {
		var nextNode = currentNode.next; // c, d, e, null
		currentNode.next = prevNode //b -> a, c -> b, d -> c, e -> d
		prevNode = currentNode;
		currentNode = nextNode;
	}
	return prevNode;
}

function printer(node, str) {
	if (!str) {
		str = "";
	}
	if (!node) {
		return str;
	}
	str += (" -> " + node.val );
	return printer(node.next, str);
}

var a = new Node(1);
var b = new Node(2);
var c = new Node(3);
var d = new Node(4);
var e = new Node(5);
a.next = b;
b.next = c;
c.next = d;
d.next = e;

var resultNode = reverse(a);

console.log(printer(resultNode));