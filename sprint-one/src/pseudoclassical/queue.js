var Queue = function() {
  
  this.storage = {};
  this.front = 0;
  this.back = 0;
};

Queue.prototype.enqueue = function (val) {
  this.storage[this.back++] = val;
};

Queue.prototype.dequeue = function () {
  if (this.size() > 0) {
    var top = this.storage[this.front];
    delete this.storage[this.front++];
    return top;
  }
};

Queue.prototype.size = function () {
  return this.back - this.front;
};

