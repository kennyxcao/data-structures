// Functional
var StackFunc = function () {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[count] = value;
    count++;
  };

  someInstance.pop = function() {
    if (count > 0) {
      count--;
      var top = storage[count];
      delete storage[count];
      return top;
    }
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};


// Functional-Shared
var StackShared = function () {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newInstance = {};

  newInstance.storage = {};
  newInstance.count = 0;

  newInstance.push = stackMethods1.push;
  newInstance.pop = stackMethods1.pop;
  newInstance.size = stackMethods1.size;

  return newInstance;
};

var stackMethods1 = {};

stackMethods1.push = function(val) {
  this.storage[this.count++] = val;
};

stackMethods1.pop = function() {
  if (this.count > 0) {
    var top = this.storage[--this.count];
    delete this.storage[this.count];
    return top;
  }
};

stackMethods1.size = function() {
  return this.count;
};



// Prototypal
var StackProto = function () {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newInstance = Object.create(stackMethods2);

  newInstance.storage = {};
  newInstance.count = 0;

  return newInstance;
};

var stackMethods2 = {};

stackMethods2.push = function(val) {
  this.storage[this.count++] = val;
};

stackMethods2.pop = function() {
  if (this.count > 0) {
    var top = this.storage[--this.count];
    delete this.storage[this.count];
    return top;
  }
};

stackMethods2.size = function() {
  return this.count;
};


// Pseudoclassical
var StackPseudo = function () {
  this.storage = {};
  this.count = 0;
};

StackPseudo.prototype.push = function (val) {
  this.storage[this.count++] = val;
};

StackPseudo.prototype.pop = function () {
  if (this.count > 0) {
    var top = this.storage[--this.count];
    delete this.storage[this.count];
    return top;
  }
};

StackPseudo.prototype.size = function () {
  return this.count;
};

// Instantiate 1000x of each type of Stack instantiation patterns
var loop = 10000;

for (var i = 0; i < loop; i++) {
  var stackfunc = StackFunc();
  var stackshared = StackShared();
  var stackproto = StackProto();
  var stackpseudo = new StackPseudo();
}
