/*
	Problem 24: Reverse a linked list in place
	- key here is to modify the previous values
	- track multiple values and update them as you go.
	- hang up here was that I had created circular references. So its important to set that value to null somewhere
*/

function LinkedListNode(value) {
   this.value = value;
   this.next = null;
}

LinkedListNode.prototype.toString = function() {
	return linkedListToString(this);
};

function reverseLinkedList(node) {
	var prev = node;
	var current = node.next;
	var future = current;
	node.next = null; // stops circular reference

	while (current !== null) {
		future = current.next; // Save the reference to the next value
		current.next = prev; // make the reverse connection
		prev = current; // increment the previous to the current one
		current = future; // increment the current one to the next one
	}

	return prev.toString();

}

function linkedListToString(node) {
	var current = node;
	var list = "";
	while (current !== null) {
		list += (current.value + " -> ")
		current = current.next;
	} 
	return list;

}

var a = new LinkedListNode("a");
var b = new LinkedListNode("b");
var c = new LinkedListNode("c");
var d = new LinkedListNode("d");
var e = new LinkedListNode("e");

a.next = b;
b.next = c;
c.next = d;
d.next = e;

console.log(reverseLinkedList(a));
