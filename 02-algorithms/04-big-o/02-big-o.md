## Common Big-O Notations

Since a big issue when discussing algorithms and data structures is their
efficiency in the face of certain tasks, we want to use a common language to
discuss such (in)efficiencies. Normally, we are interested in how much memory or
processing time is needed to complete the task depending on the size of the
input. O(1) constant time is when an algorithm takes the same amount of time to run no matter the input size - but what about the rest?

When describing the complexity of other algorithms, we often let `N` represent the input size. An array with `1000` items
in it would have `N = 1000`.

Let's look at these.


### O(n) - Linear Runtime
An algorithm that is `O(n)` is said to be "Big O of n" or **linear**, and this
indicates that the resources required grow proportionally to the size of the
input. This is reasonable performance.

> O(N) boils down to, "it takes the same amount of time as the size of the input."

For comparison, let's look at apples.

* `O(1)`: If you were told go dump out a trash can with apples in it, that would be
an `O(1)` procedure because you're dumping it all at once. It doesn't matter
how many apples are in the trash can because you can pick the whole thing up
and dump it at once. It takes you the same amount of time to empty a trash
can with 1 apple as it does with 10 or 100 apples.

* `O(n)`: However, if you were told to peel apples, you'd need to peel each individual apple. The amount of time it would take you is precisely proportional to the number of apples (`n`) there are, so this is an `O(n)` operation.

Here's a simple algorithm that runs in O(n) time. It has one `for` loop, iterating through each item.

```js
function linearRuntime(n) {
  for (var i = 0; i < n; i++) {
    console.log(i);
  }
}
```

> Here, if "n" is 10, this will run 10 times. If "n" is a million, this will run a million times! The direct relationship makes this O(n) linear time.

Can you think of an example from something you've seen?
* Inserting something in the front of an `ArrayList` is considered O(N). When you insert to the front of a list implemented as an array, every item in the list over by 1 to make room for the new item in
front. If the list has `N` items in it, then it takes `O(N)` time to shift each
of those items.

### O(n<sup>2</sup>) - Quadratic Runtime
A significantly less efficient algorithm is an algorithm that is O(n<sup>2</sup>). This is said to be "Big O of n squared" or **quadratic**. It gets especially bad as the size of your input gets higher.
> O(n<sup>2</sup>) algorithms are **slow**. Try not to write one if you can think of a different way to solve the problem!

One tell-tale sign of a algorithm with quadratic (O(N<sup>2</sup>)) runtime
is nested `for` loops! The first `for` loop runs across everything - O(n). Then the inner
`for` loop runs across everything again - a nested O(n) - for each time the first `for` loop runs
across everything! That's classic `N * N`. A general format of this might be:

```js
function slow(n) {
  for (var i = 1; i <= n; i++) {
    for (var j = 1; j <= n; j++) {
      // this will loop through "n"... inside of a loop through "n"!
    }
  }
}
```

Let's look at an example where it seems intuitive to use an algorithm that's O(N<sup>2</sup>): Times tables.

> Write a times table for n=3.

```
1 2 3
2 4 6
3 6 9
```
* You wrote down 3 things for each of number 1-3, as in, 3<sup>2</sup> things.

> Write a times table for n=5

```
1  2  3  4  5
2  4  6  8 10
3  6  9 12 15
4  8 12 16 20
5 10 15 20 25
```

* You wrote down 5 things for each of number 1-5, as in, 5<sup>2</sup> things.

Writing a times table is an O(N<sup>2</sup>) operation.

Writing a times table for `3` and `5` isn't too bad. It's doable; you can write
it down pretty quickly. Now imagine writing a times table for `100`. That's a
bigger times table. In fact, an algorithm to write a times table is:
```js
function timesTable(x) {
  for (var i = 1; i <= x; i++) {
    row = i;
    for (var j = 1; j <= x; j++) {
      row += " " + i * j;
    }
    console.log(row);
  }
}

console.log(timesTable(10));
```
> [Try it!](http://jsbin.com/wijisuw/edit?js,console)

Look at those nested `for` loops! Imagine writing a times table for `1,000` or `1,000,000`. Just to get the first
row you'd have to actually write the thing out a thousand or a million times.
Then you'd have to write out the second row. And then the third. On and on, until
you're finally done.

Algorithms that have a quadratic runtime like this are **very** bad! They'll get
the job done, but they will run exceptionally slower the more input data they
receive.


## Importantly! Asymptotic behavior.
Consider this algorithm.
```js
function linearRuntime(n) {
  for (var i = 0; i < n; i++) {
    console.log(i);
  }
  for (var i = 0; i < n; i++) {
    console.log(i);
  }
}
```

It has two `for` loops that aren't nested. What do you think the runtime complexity is?

The answer is O(n). You might have guessed O(n<sup>2</sup>), but the `for` loops aren't nested. Sequential `for` loops are still *individual* `for` loops, not nested ones. If you have to peel 10 apples and then core 10 apples, you are doing **2n** work, not n<sup>2</sup>. That makes this O(2n), not O(n<sup>2</sup>).

However, there is no O(2n) notation. This simplifies down to O(n). Why?

When we use Big-O notation, we're only worried about the
**asymptotic** behaviour. In other words, we care about the behaviour as we approach some type
of limit. Therefore, we don't worry too much about coefficients in Big-O
notation. You'll rarely see an algorithm analyzed as O(3N). It simplifies down
to just O(N).

So:

```js
function linearRuntime(n) {
  for (var i = 0; i < n; i++) {
    console.log(i);
  }
  for (var i = 0; i < n; i++) {
    console.log(i);
  }
}
```

> This is O(n).

```js
function linearRuntime(n) {
  for (var i = 0; i < n; i++) {
    console.log(i);
  }
  for (var i = 0; i < n; i++) {
    console.log(i);
  }
  for (var i = 0; i < n; i++) {
    console.log(i);
  }
  for (var i = 0; i < n; i++) {
    console.log(i);
  }
  for (var i = 0; i < n; i++) {
    console.log(i);
  }
}
```
> This is also O(n)!
