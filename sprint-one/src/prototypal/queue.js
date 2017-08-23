var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newInstance = Object.create(queueMethods);

  newInstance.storage = {};
  newInstance.front = 0;
  newInstance.back = 0;

  return newInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(val) {
  this.storage[this.back++] = val;
};

queueMethods.dequeue = function() {
  if (this.size() > 0) {
    var pop = this.storage[this.front];
    delete this.storage[this.front++];
    return pop;
  }
};

queueMethods.size = function() {
  return this.back - this.front;
}; 


