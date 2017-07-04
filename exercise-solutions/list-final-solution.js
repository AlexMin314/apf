console.log("Creating List class.");
class List {
  constructor(size) {
    var DEFAULT_SIZE = 10;

    // Create a fixed-size array. Start the size at zero.
    this.data = new Array(DEFAULT_SIZE);
    this.size = 0;
  }

  get(index) {
    return this.data[index];
  }

  set(index, item) {
    this.data[index] = item;
  }

  append(item) {
    if (this.size >= this.data.length) {
      this.growArray();
      console.log("Fixed size array grew from " + this.size + " to " + this.data.length);
    }

    this.data[this.size] = item;
    this.size++;
  }

  remove(index) {
    // Just return false if the list is already empty.
    if (this.size == 0) {
      return false;
    }

    // save the current data at the index so it can be returned at the end.
    var result = this.data[index];

    // start the element that's supposed to be removed and shift
    // everything over by one.
    for (var i = index; i < this.size - 1; i++) {
      console.log("moving:", this.data[i + 1], "to", i);
      this.data[i] = this.data[i + 1];
    }

    // decrement the total size of the list.
    this.size--;

    return result;
  }

  insert(index, item) {
    // make sure there's enough room in the array.
    if (this.data.length < this.size + 1) {
      this.growArray();
    }

    // shift elements starting from the back of the list to make room.
    for (var i = this.size; i > index; i--) {
      this.data[i] = this.data[i - 1];
    }

    // insert the item at the index it's meant to be at.
    this.data[index] = item;

    // increment the total size of the list.
    this.size++;
  }

  empty() {
    this.size = 0;
  }

  copy() {
    var result = new List();
    for (var i = 0; i < this.size; i++) {
      result.append(this.get(i));
    }

    return result;
  }

  reverse() {
    // create a copy of this list so we don't have to worry about overwriting
    // any data as things are reversed.
    var copy = this.copy();

    // Read elements from the back of the copied list and put them in the
    // front of this current list.
    for (var i = 0; i < copy.size; i++) {
      var index = copy.size - i - 1;
      this.data[i] = copy.get(index);
    }
  }

  equals(other) {
    if (this.size !== other.size) {
      return false;
    }

    // compare the values of this list to the other list.
    for (var i = 0; i < this.size; i++) {
      if (this.get(i) !== other.get(i)) {
        return false;
      }
    }

    // only return true if we made it all this way without returning false.
    return true;
  }

  growArray() {
    // create a new array twice as big as the current array.
    var newArray = new Array(this.data.length * 2);

    // copy every from the old array to the new array.
    for (var i = 0; i < this.data.length; i++) {
      newArray[i] = this.data[i];
    }

    // replace the reference from the old array to the new array.
    this.data = newArray;
  }
}

// Create the list, then add a bunch of stuff to it.
var aa = new List();
for (var i = 0; i < 100; i++) {
  aa.append(i);
}

// Iterate over each index of the list and print its values out.
console.log("Total size:", aa.size);
for (var i = 0; i < aa.size; i++) {
  var value = aa.get(i);
  console.log(value, "at index", i);
}

function assertEquals(actual, expected) {
  if (actual != expected) {
    var msg = "Got: " + actual + " Expected: " + expected;
    throw new Error(msg);
  }
}

function makeRemover() {
  var remover = new List();
  remover.append(0);
  remover.append(1);
  remover.append(2);

  assertEquals(remover.size, 3);

  return remover;
}

console.log("Test 1");
var remover = makeRemover();
remover.remove(0);
assertEquals(remover.size, 2);
assertEquals(remover.get(0), 1);
assertEquals(remover.get(1), 2);
console.log()

console.log("Test 2");
remover = makeRemover();
remover.remove(1);
assertEquals(remover.size, 2);
assertEquals(remover.get(0), 0);
assertEquals(remover.get(1), 2);

console.log("Test 3");
remover = makeRemover();
remover.remove(2);
assertEquals(remover.size, 2);
assertEquals(remover.get(0), 0);
assertEquals(remover.get(1), 1);

console.log("Test 4");
remover = makeRemover();
result = remover.remove(0);
assertEquals(remover.size, 2);
assertEquals(result, 0);

console.log("Test 5");
result = remover.remove(0);
assertEquals(remover.size, 1);
assertEquals(result, 1);

console.log("Test 6");
result = remover.remove(0);
assertEquals(remover.size, 0);
assertEquals(result, 2);

console.log("Test 7");
result = remover.remove(0);
assertEquals(remover.size, 0);
assertEquals(result, false);
