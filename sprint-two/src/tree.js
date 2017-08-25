var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  _.extend(newTree, treeMethods);
  
  // your code here
  newTree.children = [];  // fix me

  return newTree;
};


var treeMethods = {};

treeMethods.addChild = function(value) {
  // create a new Tree node and assign its value to the input value
  // append the new Tree node to children prop
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  //var found = false;  

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



/*
 * Complexity: What is the time complexity of the above functions?
  addChild - O(1)
  contains - O(n)
 */
