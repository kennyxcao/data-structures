var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newInstance = Object.create(stackMethods);

  newInstance.storage = {};
  newInstance.count = 0;

  return newInstance;
};

var stackMethods = {};

stackMethods.push = function(val) {
  this.storage[this.count++] = val;
};

stackMethods.pop = function() {
  if (this.count > 0) {
    var top = this.storage[--this.count];
    delete this.storage[this.count];
    return top;
  }
};

stackMethods.size = function() {
  return this.count;
};


