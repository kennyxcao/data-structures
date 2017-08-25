var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._count = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);

  if (!bucket) {
    this._storage.set(index, [[k, v]]);
    this._count++;
  } else {
    var updateKey = false;

    bucket = bucket.map(function(keyVal) {
      if (keyVal[0] === k) {
        updateKey = true;
        return [k, v];
      } else {
        return keyVal;
      }
    });

    if (updateKey) {
      this._storage.set(index, bucket);
    } else {
      bucket.push([k, v]);
      this._storage.set(index, bucket);
    }
  }  
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  var val = undefined;

  if (bucket) {
    bucket.forEach(function(keyVal) {
      if (keyVal[0] === k) {
        val = keyVal[1];
      }
    });
  }
  return val; 
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(index);
  if (bucket) {
    bucket.forEach(function(keyVal) {
      if (keyVal[0] === k) {
        keyVal[1] = undefined;
      }
    });

    var empty = bucket.every(function(keyVal) {
      return keyVal[1] === undefined;
    });

    if (empty) {
      this._storage.set(index, null);
      this._count--;
    }
  }
};

HashTable.prototype.getCount = function() {
  return this._count;
};



/*
 * Complexity: What is the time complexity of the above functions?
  insert - O(1)
  retrieve - O(1)
  remove - O(1)
 */


