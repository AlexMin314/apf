# Exercise

---

## Background: Comparing Two Sets

Remember that for two sets to be equal, they simply have to contain the same elements - and it doesn't matter what order they're in. That's how Sets are defined according to the Set Abstract Data Type. Unfortunately, in JavaScript, comparing two `Sets` using `===` or `==` will not produce the correct result. This is because, in JavaScript, two different objects can never be equal.

```js
var first = new Set([1, 2, 3]);
var second = new Set([3, 2, 1]);
// These sets are equal. However, JavaScript gets it wrong:
console.log(first === second); //Prints false

```
> [Try it here!](https://jsbin.com/yamuxahilu/edit?js,console)

Therefore, in JavaScript, you have to write your own function to determine if sets are equal.

## Task: Write a function that takes two Sets and determines whether they are equal.

Example usage:

```js
// Here are two sets to compare
var first = new Set([1, 2, 3]);
var second = new Set([3, 2, 1]);

// areEqual() is a function that needs to be written that returns true or false
var areTheSame = areEqual(first, second);
console.log(areTheSame); //Should print true

// Try calling areEqual() with a third set, which is different
var third = new Set([1, 2, 3, 4]);

// Use areEqual() to compare the first and third sets
areTheSame = areEqual(first, third);
console.log(areTheSame); //Should print false

```

> Your job is to write and implement the `areEqual()` function.

- Given two sets, print out whether they are equal.
- Make sure to use `forEach()` and `has()`

### [Start with this JSBin!](https://jsbin.com/muxaqawese/edit?js,console)

[Need a hint?](https://jsbin.com/tayatixijo/edit?js,console)

[Need a bigger hint?](https://jsbin.com/qoqegebura/edit?js,console)

...

#### [Solution Code](https://jsbin.com/duxivuxohi/edit?js,console)
