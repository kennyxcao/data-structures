var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  set._key = 0;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (!this.contains(item)) {
    this._storage[this._key++] = item;
  }
  // var key = JSON.stringify(item);
  // this._storage[key] = item;
};

setPrototype.contains = function(item) {
  for (var k in this._storage) {
    if (this._storage[k] === item) {
      return true;
    }  
  }  
  return false;
  // return key in this._storage;
};

setPrototype.remove = function(item) {
  if (this.contains(item)) {
    delete this._storage[this.getKey(item)];
  } 
};

setPrototype.getKey = function(item) {
  for (var k in this._storage) {
    if (this._storage[k] === item) {
      return k;
    }  
  }  
};

/*
 * Complexity: What is the time complexity of the above functions?
  add - O(1)
  contains - O(1)
  remove - O(1)
 */
