## Implement Binary Search

Try to implement your own version of binary search. Here's a description of the
algorithm to help get you started:

1. set up variables `min`, `max` and `guess` to keep track of the range of
   indexes you're currently searching through. `n` will be the number we're searching for that's passed in.
2. set `guess` equal to `(min + max) / 2` and round it. We'll let you figure out what `min` and `max` should be set to at first.
3. read the value of the array at the index of `guess`.
  * Is `guess === n`? Return `guess` as the index of `n`
   * If the value read is higher than `n` then adjust `max = guess - 1`
   * If the value read is lower than `n` then adjust `min = guess + 1`
   * Repeat steps 2 through 5 until `n` is found.
8. return `-1` if `min`, `max`, and `guess` converge on an index and
   `n` is not in the array.

You may assume the given array is sorted. Your code must handle the case when
the array is empty.

```js
// search for the index n inside of array
// return the index of n
// return -1 if it doesn't exist
function binarySearch(array, n) {

}
```

> [Start here for a blank slate](http://jsbin.com/howunisule/1/edit?js,console)

> Note! You can do this recursively as well. For some hints, here are the two different use cases with `console.log`s built in.
  * [Non-recursive with `console.log`s here](http://jsbin.com/kunominuro/1/edit?js,console)!
  * [Recursive with `console.log`s: Start here!](http://jsbin.com/zikikinoki/2/edit?js,console) (difference: just where we put the helpful console logs)

> Non-recursive solution [here](http://jsbin.com/zuvedujopo/1/edit?js,console)

> Recursive solution [here](http://jsbin.com/quyojaface/3/edit?js,console)

### What if the value isn't there?
Binary Search is able to return useful information even if the element isn't
even in the array.

What happens when an element isn't in a array?

```js
var nums = [7, 10, 20, 30, 40, 50, 60]
binarySearch(nums, 15); // look in nums for n = 15
// this returns -1
```

Here's what happens when Binary Search runs:

```js
// min is 0, max is 6. 6/2 = 3.
guess = 3    // start at index 3
nums[3] = 30 // n < 30: need to change guessing range.
guess = 1    // guess lower half of current search. New max: 2; same min: 0. Guess: 1.
nums[1] = 10 // n > 10: need to change guessing range.
guess = 2    // guess higher half of current search. Same max: 2; new min: 2. Guess: 2
nums[2] = 20 // n!=20: But min/max are the same; no index left to search
// item isn't in array: `-1` is returned
```

### Something cool we can do instead
It can actually return an index representing where an element *should* be.
Instead of manually returning `-1`, we can *almost* return the index of our
last guess. The index of our last guess represents where the element would
be if it were in the array. Then, we could manually add the item at exactly
the correct index and the array would remain sorted.

As in:
```js
var nums = [7, 10, 20, 30, 40, 50, 60]
binarySearch(nums, 15);
```

The last guess was at index `2`, which means that if `15` *were* present in the array, it would be at index `2`.

> We can use this information!

Instead of always returning `-1` when an item isn't found, we can return the index that it should be at - set to negative, so that it isn't confused with actually finding the item. For example, `binarySearch(nums, 15);` would return `-2`, since `2` is where `15` *should* be. If we were instead to do `binarySearch(nums, 55);`, we could return `-6`, since if `55` were in the array, it would be at index `6`.

**How?**

Now, any positive number
that comes back from the binary search represents that the element was found there.
Any negative number that comes back from the array means that the element wasn't found,
but we can do some math on the result and determine where it *should* be added.

Wait. What about if it needs to be at index `0`? What's negative zero? Still just zero.

The zero-index of arrays complicates the idea that we
can simply return the negative index of our last guess. If the algorithm returned
zero it would be impossible to tell if it meant it *found* the element at zero,
or if it means the element wasn't found and it *should be added* at element zero.

**What do we do?**
Instead of returning `-guess`, return `(-guess - 1)`. This shifts zero indexes from
zero to negative one. And now our algorithm truly fits these rules:

1. `binarySearch(n) >= 0` is the index of the element in the array
2. `binarySearch(n) < 0` means the element wasn't found.

If binary search returns a negative number we can add 1 to it and negate it to
determine where a non-found element should be inserted. Now, it'll return the index of the first element greater than the key.

So we'll change our return from always `-1` to instead:

```js
// if min and max are the same and the item isn't found...
// instead of returning -1,
if (guessIndex < 0) {
  insertIndex = -(guessIndex + 1);
}
```
Now, a not found index of '0' returns '-1'. We then know that the index where we should insert the item is right before `1`, ergo, our number is inserted at index `0`.

> Let's look:


```js
var nums = [7, 10, 20, 30, 40, 50, 60]
binarySearch(nums, 1); // would return
```

This would return -1. We could then know that the index immediately following our number would be `1`, so our number needs to go at index `0`.

```js
var nums = [7, 10, 20, 30, 40, 50, 60]
binarySearch(nums, 15); // would return
```

This would return -3. We could then know that the index immediately following our number would be `3`, so our number needs to go at index `2`.
