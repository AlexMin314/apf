
---

## Implementing the Stack

Now that we understand the concept behind a stack, let's program it. Some languages have a `Stack` class built in - here in JavaScript, we're going to build one. We'll use an underlying array. (In fact, since as we've seen JavaScript blends some abstract data types together in its implementation, in JavaScript many of the stack methods already exist in their array implementation).

### Creating the class
We are going to started by defining the `class` for the Stack. Since we are using an array, we can declare the class and inside it, put a constructor that initializes an empty array.

```js
class Stack {

    constructor() {
        this.array = [];
    }

}
```
> [Try it!](https://jsbin.com/mamijegopi/edit?js,console) You can work off of this JSBin - the other methods in it (`toString` and `print`) are written by us just so we can print the set as we go for testing.

Our goal is to add enough functions to this class to turn it into a complete Stack. In our array, the last element in the array is the top. As such, we'll `push` and `pop` from the back of the array.

`myStackArray = ["plate", "pancake", "second pancake", "syrup"]`

> Note that to refer to the Object's own `array` property, the `this` keyword must be used (JavaScript!).

---

### So what are the functions?

Before we get into depth, here's a quick rundown of the four functions that the Stack Abstract Data Type contains:

+ `push()` - Adds to the top of the stack
+ `pop()` - Removes from the top of the stack
+ `peek()` - Gives you the value at the top of the stack without removing it
+ `isEmpty()` - Determines whether the stack is empty or not


### Implementing `Push`

Push is what lets us add elements to the top of the stack (making a new pancake). Thankfully, the JavaScript `Array` type already has a `push()` method that we can use. It adds an element to the back of the array. `push()` takes a parameter which is the value or object you want to add to the top of the stack.

```js
// before a push, we would have:
var myStackArray = ["plate", "pancake", "second pancake", "syrup"];

myStackArray.push("butter");

// Now we would have:
console.log(myStackArray); // ["plate", "pancake", "second pancake", "syrup", "butter"];
```


* In your JSBin, add the `push` method. Then, try to `push` some items onto your stack!

```js
class Stack {
//...

    push(item) {
        this.array.push(item);
    }
}
```

> If you'd like a reference, [here is a JSBin](https://jsbin.com/mixaderequ/edit?js,console) of the stack that has the `push` method and a lot of tests already in it.

#### Practice
`Push` some numbers or strings onto the stack and `print` the result.

---

### Implementing `Pop`

Pop is what lets us remove the element at the top of the stack. (Popping off the top pancake onto our plate!). Thankfully, the JavaScript `Array` type already has a `pop()` method that we can reuse. `pop()` doesn't take an argument - it removes and returns the last element in the array, which is perfect.

```js
// before a pop, we would have:
var myStackArray = ["plate", "pancake", "second pancake", "syrup", "butter"];

var temp = myStackArray.pop();

// Now we would have:
console.log(myStackArray); // ["plate", "pancake", "second pancake", "syrup"];

// and temp is:
console.log(temp); // "butter"

```
* In your JSBin, add the `pop` method. Then, try to `pop` some items onto your stack!

```js
class Stack {
//...
    pop() {
        return this.array.pop();
    }
}
```
> If you'd like, [here is a JSBin](https://jsbin.com/luyadupozi/edit?js,console) of the stack that has the `pop` method and a lot of tests already in it.

#### Practice
Continue to pop the stack until no more elements are left.
Try to print the stack after each `pop()` to see what the stack looks like.
