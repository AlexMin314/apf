# Algorithm Complexity

Would you follow convoluted instructions to make a cake - 2 pots to melt chocolate and butter, 5 bowls to mix all ingredients separately, 2 hours of preparation and 3 hours of dishes after - when you could make that same cake with 15 minutes of preparation and two bowls? No, right? The second is the much more efficient way to make the same cake.

We've seen several different algorithms now, and some accomplish the same thing in different ways (like bubble sort versus merge sort). Whenever we create algorithms, we need to be aware that they run on computers,
and computers have limits in terms of time and space. Even though most of the
algorithms we've written seem to run instantaneously, when dealing with concepts
like scalability, that "instant" algorithm can possibly take minutes or days to
run if there's too much data provided to it.

What we need to do is analyze the complexity of the algorithm so we can estimate
how efficient it is. This is done in terms of:

* Runtime (processing time, via the CPU)
* Runspace (how much memory does it take up)

The most common way to express the efficiency/complexity of an algorithm is using what
is called **Big-O Notation**.

## Big-O Notation

> In computer science, big O notation is used to classify algorithms by how they
> respond (e.g., in their processing time or working space requirements) to
> changes in input size. -- Wikipedia

We represent complexity using the syntax `O(x)`, where `x` is the complexity, or how long the algorithm takes to run. For example, there's O(1), O(N), O(N log N), etc (where N is the size of the input). The bigger the value inside the parentheses, the longer and more complex - the less efficient - the algorithm is. Let's look at some of these:



### O(1) - Constant time

An algorithm that is O(1) is said to be "Big O of 1" or **constant** time. It does not vary
depending on the size of the input. This is the best classification. An algorithm that runs in O(1) is extremely fast, no matter how big the input is.

For example, the following algorithm is O(1) - it gets an input in and just multiplies that input by two, regardless of the size of the input:

```js
function constantRuntime(n) {
  var result = n * 2;
  return result;
}
```

> O(1): No matter how big the input gets (whether `n` is 15, 2741, or 1,051,151), the algorithm runs in the same constant amount of time.

Can you think of anything you've done that is constant time?

* One is doing a **lookup of a key in a map**.
  * No matter the size of the map, if you know the key, it takes the same amount of time to do a `get` on it to get the value.


* Another is **inserting things at
the front of a linked list.**
  * Even if a linked list has 10,000 items in it,
inserting something to the front always has constant time because nothing else
has to be shifted - a new `node` is created and `root` is set to point at that `node`. The other 10,000 items don't need to change.



```js
class LinkedList {
  prepend(data) {
    var node = new ListNode(data);
    node.next = this.root;
    this.root = node;
  }
}
```

It's constant because it happens in the same constant amount of time, no matter
how big the list gets.

> This is a huge advantage of linked lists!

### Quiz!

Given the below functions, which runs in O(1) constant time?


```js
function doubler(a) {
  for (var i = 0; i < a.length; i++) {
    a[i] = a[i] * 2;
  }
}

function tripler(a) {
  a[0] = a[0] * 3;
  a[1] = a[1] * 3;
  a[2] = a[2] * 3;
  a[3] = a[3] * 3;
}
```

> <details>
  <summary>Have a guess?</summary>
    The `tripler` function is `O(1)`
</details>

...

Why is that the answer?

...

* The `tripler` function will always take the same
amount of time no matter how big the array is. Since the function only
accesses a few specific indexes, it will always take a constant amount of time
to run. It doesn't matter if the array has 10, 100 or a million things in
it. The function will always take the same amount of time to run, because it's directly - and only - hitting those few specific indexes.
  * If an array with 10 elements were passed into `tripler`, the array
would only be accessed at `a[0]`, `a[1]`, `a[2]`, `a[3]`. That's only 4 array accesses.  If an array with only a million elements
were passed into `tripler`, the function would still only do 4 array
accesses. No matter how large the input gets, the function will only do 4 array accesses. **This is `O(1)` constant time.**


* Conversely, the `doubler` function is not `O(1)` because it has a `for` loop that accesses
every index in the array. It doesn't directly and only hit a few specific indexes - it steps, one by one, through every single element in the array. The bigger the array is, the longer it will take
this function to run.
  * The `doubler` function access every element in the array. It would do one
access for an array with one thing in it. For an
array with 10 things in it, it would do 10 accesses. For an array
with a million things in it, it would do a million accesses. **Since the number changes depending on the
size of the array, it is not `O(1)` constant time.**

----

O(1) covers just one case (and it's a great one!), but there are many common algorithm complexities out there.
