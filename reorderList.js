var a = new ListNode(1);
var b = new ListNode(2);
var c = new ListNode(3);
var d = new ListNode(4);
var e = new ListNode(5);
var f = new ListNode(6);
var g = new ListNode(7);
var h = new ListNode(8);
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;
g.next = h;

function ListNode(val) {
  this.val = val;
  this.next = null;
}

function reOrder_pretty(node) {
	if(node == null || node.next == null || node.next.next == null) {
		return
	}
	
	var a1 = node;
	var a2 = node;
	// Get a pointer at the middle
	while(a2.next !== null) {
		a1 = a1.next;
		a2 = a2.next;
		if (a2.next == null) {
			break;
		} else {
			a2 = a2.next;
		}
	}

	reverseList(a1)

	var p = node;
	var t1 = node;
	var t2 = node;
	// start from both side of the list. when a1, a2 meet, the merge finishes.
	while (a2 != a1) {
		t1 = p;
		t2 = a2;
		p = p.next;
		a2 = a2.next;

		t2.next = t1.next;
		t1.next = t2;
	}

}

reOrder_pretty(a);

function reverseList(headOfList) {
	var current  = headOfList;
  var previous = null;
  var nextNode = null;

  // until we have 'fallen off' the end of the list
  while (current) {

      // copy a pointer to the next element
      // before we overwrite current.next
      nextNode = current.next;

      // reverse the 'next' pointer
      current.next = previous;

      // step forward in the list
      previous = current;
      current = nextNode;
  }

    return previous;
}

function reOrder_brute(node) {
	if (!(node instanceof ListNode) || node.length < 2) {
		return;
	}
	var current = node;
	var nextNode = node.next;
	var last = node;
	var prevLast;
	if (nextNode == null) {
		return
	}
	while (nextNode.next != prevLast) {

		// find the last item;
		while(last.next != null) {
			last = last.next;
		}

		prevLast = last; // save old last to stop circular references
		// build the next chain
		last.next = nextNode;
		current.next = last; 

		//update new values
		current = nextNode;
		nextNode = current.next;
	}

	// stop circular reference
	nextNode.next = null;
}


// reOrder_brute(a);