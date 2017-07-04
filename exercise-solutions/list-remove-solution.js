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
