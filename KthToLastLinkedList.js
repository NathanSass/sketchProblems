function LinkedListNode(value) {
  this.value = value;
  this.next = null;
}

var a = new LinkedListNode("Angel Food");
var b = new LinkedListNode("Bundt");
var c = new LinkedListNode("Cheese");
var d = new LinkedListNode("Devil's Food");
var e = new LinkedListNode("Eccles");


function kthToLastNode(k, node) {
	var kNode = node; // 
	var tail = node; // 

	for(var i = 0; i < k; i++) { // makes the tail into a runner, throw some sort of error here if this fails
		tail = tail.next;
	}

	while (tail != null) {
		kNode = kNode.next
		tail = tail.next
	}

	return kNode.value

}

a.next = b;
b.next = c;
c.next = d;
d.next = e;

console.log(kthToLastNode(2, a));