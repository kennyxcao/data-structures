var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.parent = null;
  // your code here
  newTree.children = [];  // fix me

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  if (this.contains(value)) {
    throw new RangeError('already exist child with value');
  } else {
    var child = Tree(value);
    child.parent = this;
    this.children.push(child);
  }
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  } 
  if (this.children.length > 0) {
    return this.children.some(function(child) {
      return child.contains(target);
    });
  }
  return false;
};

// A .removeFromParent() method, which disassociates the tree with its parent (in both directions)
treeMethods.removeFromParent = function(value) {
  var parent = this.parent;  
  if (parent) {
    this.parent = null;
    var index;
    parent.children.forEach(function(child, i) {
      if (child.value === this.value) {
        index = i;
      }
    });
    //splice child out of children array
    parent.children.splice(index, 1);
  } 
};

treeMethods.traverse = function(cb) {
  cb(this.value);
  
  if (this.children.length > 0) {
    this.children.forEach(function(child) { 
      child.traverse(cb);
    });
  }  
};

/*
 * Complexity: What is the time complexity of the above functions?
  addChild - O(1)
  contains - O(n)
 */
