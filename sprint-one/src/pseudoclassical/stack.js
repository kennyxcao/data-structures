var Stack = function() {
  
  this.storage = {};
  this.count = 0;
  
};

Stack.prototype.push = function (val) {
  this.storage[this.count++] = val;
};

Stack.prototype.pop = function () {
  if (this.count > 0) {
    var top = this.storage[--this.count];
    delete this.storage[this.count];
    return top;
  }
};

Stack.prototype.size = function () {
  return this.count;
};





