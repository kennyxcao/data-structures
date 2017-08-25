var BinarySearchTree = function(value) {
  var tree = Object.create(BinarySearchTree.prototype);

  tree.value = value;
  tree.left = null;
  tree.right = null;

  return tree;
};

BinarySearchTree.prototype.insert = function(value) {
  if (this.value === value) {
    throw new RangeError('Tree value already existed.');
  }
  //left child
  if (this.value > value) {
    if (!this.left) {
      this.left = BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  } else if (this.value < value) { //right child
    if (!this.right) {
      this.right = BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }
};

BinarySearchTree.prototype.contains = function(value) {
  if (this.value === value) {
    return true;
  } 

  if (this.value > value && this.left) {
    return this.left.contains(value);
  } else if (this.right) {
    return this.right.contains(value);
  } else {
    return false;
  }
};

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  // base case apply cb function on value
  // start at top node
  // use recursion to travel down left side
  // use recursion to travel down right side
  cb(this.value);
  if (this.left) {
    this.left.depthFirstLog(cb);
  }
  if (this.right) {
    this.right.depthFirstLog(cb);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
    insert - O(n)
    contains - O(log n) is average; worst case is O(n) for an unbalanced tree
    depthFirstLog - O(n)
 */
