
# Implementing a List

Something like this might be our goal. We might have two lists - `odd` and `even`. We'd generate a random value, and depending on what it is, we'd add it to one list or the other - so we don't know how long either list will be in advance. We would create two empty lists, and then use `.append()` to dynamically grow the list that the value ended up needing to go in.

```js
var totalChoices = 10; // number of times to run the loop
var maxValue = 100; // max value of the random value generated

// make two lists to keep track of an unknown number of items
var odds = new List(); // dynamically grow this for odd numbers!
var evens = new List(); // dynamically grow this for even numbers!

// Both these two lists are currently empty

// Loop 10 times
for (var i = 0; i < totalChoices; i++) {

  // generate random numbers
  var choice = Math.floor(Math.random() * maxValue);

  // append the number to the correct list - growing the list
  if (choices % 2 == 0) {
    evens.append(choice);  
  } else {
    odd.append(choice);
  }
}

// we'd have to now call odds.size() or evens.size() to know how long the list is
```

While this fits the **List ADT**, it won't run in JavaScript - there is no list data type that's pre-written for us in JavaScript. Some languages do have this! So to see how those work, we're going to take JavaScript's array and build all the functions we'd need to create a `List` class.

We'll build our `List` class using an array. Because we're sticking to the standard data structures and data types, we'll restrict ourselves to using the **array ADT**. Remember, arrays are data structures that never change size. Since we're in JavaScript,
this means we'll just have to ignore all the convenient fancy cheat functions
like `.push()`, `.pop()` and `.splice()`. We'll only allow ourselves to create
new arrays of a fixed size, and only read and write from those fixed-size
arrays - following the array ADT specification.


## Pay No Attention to that Array Behind the Curtain!
Here's the basic idea of how we'll make our list. Because we can dynamically resize a list but in an array the size is fixed, we'll create a large array, we'll:
* Create a `List` class
* Give it a large fixed-size array and a variable called `size`
* When adding items to the array, we'll count how many items we've added using `size`

If we ever add more items than we have room for in the array, then we'll:
* Create a
new array that's twice the size of the old array
* Copy all the values from
the old array into the new array

If we keep doing this we'll be able to have
a list that grows basically forever!

> Start with [this JSBin](http://jsbin.com/nagosaramu/2/edit?js,output). It already has two things for you: a function that will iterate through the list and print it out, and the declaration of a variable of type `List`.

* At the top of the JSBin, create a new class called `List`.

```js
class List {
}

var myList = new List();

console.log("Total size:", myList.size);
```

* Have one array of fixed size inside the `List` class, initialized in the constructor.
  * We're going to make sure the array can't be accessed outside the class.
* Make the array start with some fixed default size. Every value in it will
  start as `undefined`.

```js
class List {
  constructor(size) {
    var DEFAULT_SIZE = 10;

    // Create a fixed-size array.
    this.data = new Array(DEFAULT_SIZE);
  }
}
```

If you click "Run" right now, "size" will print undefined. This is, again, because currently `list.size()` doesn't exist. Since you're using an array, you can say `console.log(myList.data.length);` and the console will print 10. However, you don't care about the array size - you care about the list size, which is simply the number of items stored in it. So, you are going to define `list.size()` as returning the size of the list, not the size of the array that we happen to be using.

* Make a `size` variable that starts at zero, since there are currently no items in the list.

```js
class List {
  constructor(size) {
    var DEFAULT_SIZE = 10;

    // Create a fixed-size array. Start the size at zero.
    this.data = new Array(DEFAULT_SIZE);
    this.size = 0;
  }
}
```

Now if you run it, the `size` will print at 0.

Let's start with adding an item to the list. You'll need to insert - or "append" - your item to the list, which will actually be writing the item to the array. Whenever that happens, you'll want to increment the size variable to keep an accurate size of your list.

* Under the constructor, make a method called `.append(item)` that writes the item to the array.
* Increment the `size` variable whenever a new item is added to the array.

```js
  append(item) {
    this.data[this.size] = item;
    this.size++;
  }

```

Let's try to run this and see if it works. Always test often! Underneath the list declaration, add an append:
```js
// Create the list
var myList = new List();

// Add something!
myList.append("Yay!");
```

If you hit run, the `size` goes up to 1. Great!

But what if we append too many things? Arrays in JavaScript are fixed size, whereas lists are dynamic.

* Under the `appendArray()` method, add a `growArray()` method: If `size` ever gets larger than the length of the array, then create a new
  array that's twice as big and copy all of the values from the old array to
  the new array.


```js
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
```

* Now, amend your `append` method to check if the list is larger than the array, and if it is, to call `growArray()`

```js
append(item) {
  if (this.size >= this.data.length) {
    this.growArray();
    console.log("Fixed size array grew from " + this.size + " to " + this.data.length);
  }

  this.data[this.size] = item;
  this.size++;
}
```

## Verifying Results
Let's add a bunch of numbers to the list and see how it grows. Under the array declaration, put a `for` loop to `append` many new values.

```js
// Create the list
var myList = new List();

// add a bunch of stuff to it
for (var i = 0; i < 100; i++) {
  myList.append(i);
}
```

```
Fixed size array grew from 10 to 20
Fixed size array grew from 20 to 40
Fixed size array grew from 40 to 80
Fixed size array grew from 80 to 160
```

Awesome! We have a dynamically growing list. Now, what if we want to see what's in the list? Because it's a class and the array is private, we'll need to create a `get` method to call. In the `List` class, add the `get()` method:

```js
get(index) {
    return this.data[index];
  }
```

Now, let's look at every spot in our list to make sure elements are being written appropriately. We can iterate over the list with a `for` loop to the size of it, then call `get` to print each value.

```js
// Iterate over each index of the list and print its values out.
console.log("Total size:", myList.size);
for (var i = 0; i < myList.size; i++) {
  var value = myList.get(i);
  console.log(value, "at index", i);
}
```

```
Total size: 100
0 'at index' 0
1 'at index' 1
2 'at index' 2
3 'at index' 3
...
98 'at index' 98
99 'at index' 99
```
> Check yourself! In total, this is the code you should have in JSBin.

```js

class List {
  constructor(size) {
    var DEFAULT_SIZE = 10;

    // Create a fixed-size array. Start the size at zero.
    this.data = new Array(DEFAULT_SIZE);
        this.size = 0;
  }

  append(item) {
    if (this.size >= this.data.length) {
      this.growArray();
      console.log("Fixed size array grew from " + this.size + " to " + this.data.length);
    }

    this.data[this.size] = item;
    this.size++;
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

  get(index) {
    return this.data[index];
  }
}


var myList = new List();

myList.append("Yay!");
for (var i = 0; i < 100; i++) {
  myList.append(i);
}


console.log("Total size:", myList.size);

// Iterate over each index of the list and print its values out.
console.log("Total size:", myList.size);
for (var i = 0; i < myList.size; i++) {
  var value = myList.get(i);
  console.log(value, "at index", i);
}
```

Now you have a List class that can append items! Hold on to this JSBin - we'll keep adding to it.
