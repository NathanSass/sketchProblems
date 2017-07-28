/**
	https://www.interviewcake.com/question/javascript/graph-coloring
**/

function GraphNode(label) {
	this.label = label;
	this.neighbors = new Set();
	this.color = null;
}

var a = new GraphNode("a");
var b = new GraphNode("b");
var c = new GraphNode("c");

a.neighbors.add(b);
b.neighbors.add(a);
c.neighbors.add(b);
b.neighbors.add(c);

var graph = [a, b, c];

function makeColors(graph, colors) {
	graph.forEach(function(node) {
		var illegalColors = new Set();

		node.neighbors.forEach(function(neighbor) {
			if(neighbor.color != null) {
				illegalColors.add(neighbor.color)
			}
		})

		var legalColors = []

		colors.forEach(function(color) {
			if(!illegalColors.has(color)) {
				legalColors.push(color)
			}
		})

		node.color = legalColors[0];
	})
}