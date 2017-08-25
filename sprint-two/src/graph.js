// Instantiate a new graph
var Graph = function() {
  this.vertices = {}; 
  this.edges = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.vertices[node] = node;
  this.edges[node] = {};
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return node in this.vertices;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this.vertices[node];
  delete this.edges[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this.contains(fromNode) && this.contains(toNode)) {
    return !!(this.edges[fromNode][toNode] && this.edges[toNode][fromNode]);
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // check if both nodes are contained in the Graph
  // if true, then add node to this.edges object for both nodes
  if (this.contains(fromNode) && this.contains(toNode)) {
    this.edges[fromNode][toNode] = true;
    this.edges[toNode][fromNode] = true;
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  if (this.contains(fromNode) && this.contains(toNode)) {
    this.edges[fromNode][toNode] = false;
    this.edges[toNode][fromNode] = false;
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var node in this.vertices) {
    cb(node);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
  addNode - O(1)
  contains - O(1)
  removeNode - O(1)
  hasEdge - O(1)
  addEdge - O(1)
  removeEdge - O(1)
  forEachNode - O(n)
 */


