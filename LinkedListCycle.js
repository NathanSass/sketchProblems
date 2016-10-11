function LinkedListNode(value) {
   this.value = value;
   this.next = null;
}

function hasCycle(node) {
	var walker = node;
	var jogger = node.next;
	var runner = jogger.next;

	while (runner != null) {
		// if runner has passed walker return true

		if (runner == walker || runner == jogger) {
			return true;
		}

		walker = walker.next;
		if (walker == null) {
			return false;
		}
		jogger = jogger.next;

		if (jogger == null) {
			return false;
		}
		if (jogger.next == null || jogger.next.next == null) {
			return false;
		} 
		runner = runner.next.next;
	}

	return false;




}


var a = new LinkedListNode("a");
var b = new LinkedListNode("b");
var c = new LinkedListNode("c");
var d = new LinkedListNode("d");

a.next = b;
b.next = c;
c.next = d;
// d.next = a;

console.log(hasCycle(a));
