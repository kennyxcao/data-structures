describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a('function');
    expect(set.contains).to.be.a('function');
    expect(set.remove).to.be.a('function');
  });

  it('should add string values to a set', function() {
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should remove string values from a set', function() {
    set.add('Mel Gibson');
    set.remove('Mel Gibson');
    expect(set.contains('Mel Gibson')).to.equal(false);
  });

  // New tests
  it('should only contain unique instance of data', function() {
    set.add('Susan Sarandon');
    set.add('Susan Sarandon');
    set.remove('Susan Sarandon');
    expect(set.contains('Susan Sarandon')).to.equal(false);
  });

  // Make your set capable of handling numbers as well as strings
  it('should add number values to a set', function() {
    set.add(1);
    set.add(2);
    expect(set.contains(1)).to.equal(true);
    expect(set.contains(2)).to.equal(true);
  });

  it('should remove number values from a set', function() {
    set.add(1);
    set.remove(1);
    expect(set.contains(1)).to.equal(false);
  });

  // Make your set capable of handling input objects of any type
  it('should add object values to a set', function() {
    var a = {a: 1};
    var b = {b: 1};
    set.add(a);
    set.add(b);
    expect(set.contains(a)).to.equal(true);
    expect(set.contains(b)).to.equal(true);
  });

  it('should remove object values from a set', function() {
    set.add({a: 1});
    set.remove({a: 1});
    expect(set.contains({a: 1})).to.equal(false);
  });

  it('should add arr values to a set', function() {
    var a = [1, 2];
    var b = [2, 3];
    set.add(a);
    set.add(b);
    expect(set.contains(a)).to.equal(true);
    expect(set.contains(b)).to.equal(true);
  });

  it('should remove arr values from a set', function() {
    set.add([1, 2]);
    set.remove([1, 2]);
    expect(set.contains([1, 2])).to.equal(false);
  });

  it('should add unique reference of arr values to a set', function() {
    var arr1 = [1, 2];
    var arr2 = [1, 2];
    set.add(arr1);
    set.add(arr2);
    expect(set.contains(arr1)).to.equal(true);
    expect(set.contains(arr2)).to.equal(true);
    set.remove(arr1);
    expect(set.contains(arr1)).to.equal(false);
    expect(set.contains(arr2)).to.equal(true);
  });


  it('should add unique reference of object values to a set', function() {
    var obj1 = {a: 1};
    var obj2 = {a: 1};
    set.add(obj1);
    set.add(obj2);
    expect(set.contains(obj1)).to.equal(true);
    expect(set.contains(obj2)).to.equal(true);
    set.remove(obj1);
    expect(set.contains(obj1)).to.equal(false);
    expect(set.contains(obj2)).to.equal(true);
  });

  it('should add boolean values to a set', function() {
    set.add(true);
    set.add(false);
    expect(set.contains(true)).to.equal(true);
    expect(set.contains(false)).to.equal(true);
  });

  it('should remove boolean values from a set', function() {
    set.add(true);
    set.add(true);
    set.remove(true);
    expect(set.contains(true)).to.equal(false);
  });

  it('should add null value to a set', function() {
    set.add(null);
    expect(set.contains(null)).to.equal(true);
  });

  it('should remove null values from a set', function() {
    set.add(null);
    set.add(null);
    set.remove(null);
    expect(set.contains(null)).to.equal(false);
  });

  it('should add undefined value to a set', function() {
    set.add(undefined);
    expect(set.contains(undefined)).to.equal(true);
  });

  it('should remove undefined values from a set', function() {
    set.add(undefined);
    set.add(undefined);
    set.remove(undefined);
    expect(set.contains(undefined)).to.equal(false);
  });

  it('should distinguish same value of string and number data types', function() {
    set.add('1');
    set.add(1);
    expect(set.contains('1')).to.equal(true);
    expect(set.contains(1)).to.equal(true);
    set.remove(1);
    expect(set.contains('1')).to.equal(true);
    expect(set.contains(1)).to.equal(false);
  });

  it('should distinguish same value of string and boolean data types', function() {
    set.add('true');
    set.add(true);
    expect(set.contains('true')).to.equal(true);
    expect(set.contains(true)).to.equal(true);
    set.remove('true');
    expect(set.contains('true')).to.equal(false);
    expect(set.contains(true)).to.equal(true);
  });

  it('should distinguish same value of string and null data types', function() {
    set.add('null');
    set.add(null);
    expect(set.contains('null')).to.equal(true);
    expect(set.contains(null)).to.equal(true);
    set.remove('null');
    expect(set.contains('null')).to.equal(false);
    expect(set.contains(null)).to.equal(true);
  });

  it('should distinguish same value of string and undefined data types', function() {
    set.add('undefined');
    set.add(undefined);
    expect(set.contains('undefined')).to.equal(true);
    expect(set.contains(undefined)).to.equal(true);
    set.remove('undefined');
    expect(set.contains('undefined')).to.equal(false);
    expect(set.contains(undefined)).to.equal(true);
  });
});
