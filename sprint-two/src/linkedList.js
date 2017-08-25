var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (list.tail === null) {
      list.tail = Node(value);
      list.head = list.tail;
    } else {
      // assign current tail to a temp
      // assign tail to value
      // assign temp.next to new tail
      var previous = list.tail;
      list.tail = Node(value);
      previous.next = list.tail;
    }
  };

  list.removeHead = function() {
    //temp variable for current head.next
    // remove current head
    // assign list.head to the next node
    var prevHead = list.head;
    list.head = list.head.next;
    if (list.head === null) {
      list.tail = null;
    }
    return prevHead.value;
  };

  list.contains = function(target) {
    // start at head node, check its value prop = target
    // return true if target matches, else go to next node and repeat
    // return false if reached end of linklist (null) and target is not found
    var node = list.head; 

    while (node) {
      if (node.value === target) {
        return true;
      } else {
        node = node.next;
      }
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
    addToTail - O(1)
    removeHead - O(1)
    contains - O(n)
 */
