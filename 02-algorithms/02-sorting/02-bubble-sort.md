
# Bubble Sort

Bubble sort is one of the first sorting algorithms you should master. While it isn't particularly efficient, it's simple and intuitive. Bubble Sort compares neighboring elements and forces larger elements to 'bubble' to the end of an array while simultaneously 'floating' smaller elements to the top/front of a list. This sorting algorithm is what you might do if you were asked to sort a list one by one.

Barack Obama at Google answers "what is the most efficient way to sort
a million 32-bit integers?"
https://www.youtube.com/watch?v=k4RRi_ntQc8

Bubble sort is not the most efficient sorting algorithm in the world.
In fact, it's one of the worst. Still, it works. Let's see how it works.

Bubble Sort iterates through an array and swaps any two values that are
next to each other that are out of order. It does this over and over
until it passes through the array without swapping any values.

Here's the basic idea of the Bubble Sort algorithm:

1. Start at the beginning of a list (array) of items.
2. Compare the item you're looking at to the next item in the list.
3. If this item is greater than the next one, swap them.
4. Move on to the next item.
5. Repeat steps 1-4 until you go through the whole list without doing any swaps.

**Bubble sort animated**:

![Bubble sort animation](https://upload.wikimedia.org/wikipedia/commons/c/c8/Bubble-sort-example-300px.gif)
* <details>
<summary>Image credit:</summary>
Image: By Swfung8 (Own work) [CC BY-SA 3.0](http://creativecommons.org/licenses/by-sa/3.0) or [GFDL](http://www.gnu.org/copyleft/fdl.html), via Wikimedia Commons
</details>


[As well, some Hungarian ("Csángó") folk dance](https://youtu.be/lyZQPjUT5B4?t=53s) - really, they run through bubble sort!

![Dance](https://camo.githubusercontent.com/dfdd07e3449ed3a0ab64216c36f8d2204008375b/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f313136314243657639394f7552692f67697068792e676966)

-----

### Example: Sort this list using Bubble Sort: [5, 4, 2, 3, 1, 6]

Let's go through each iteration over the array and apply a bubble-sort.

**Iteration 1**

Look at the first two elements in the list.

0: `[5, 4, 2, 3, 1, 6]`

* Is `5 > 4 `? Yes! Swap!

If an element on the left (5) is greater than the element on the right (4), the two elements 'swap' locations. The algorithm continues comparing two sequential numbers until it reaches the end of the array:

* Now 5 and 2 are compared:

1: `[4, 5, 2, 3, 1, 6]` ⇨ `[4, 2, 5, 3, 1, 6]` SWAP!

* Now 5 and 3 are compared:

2: `[4, 2, 5, 3, 1, 6]` ⇨ `[4, 2, 3, 5, 1, 6]` SWAP!

* Now 5 and 1 are compared:

3: `[4, 2, 3, 5, 1, 6]` ⇨ `[4, 2, 3, 1, 5, 6]` SWAP!

* Now 5 and 6 are compared:

4: `[4, 2, 3, 1, 5, 6]` ⇨ `[4, 2, 3, 1, 5, 6]` order is correct - don't swap

**Important:**  We now know that the last element in the list is the largest element in the list. There's no need to do a comparison with that number ever again.

** Iteration 2**

* 2 and 4 are compared:

0: `[4, 2, 3, 1, 5, 6]` ⇨ `[2, 4, 3, 1, 5, 6]` SWAP!

* 4 and 3 are compared:

1: `[2, 4, 3, 1, 5, 6]` ⇨ `[2, 3, 4, 1, 5, 6]` SWAP!

* 4 and 1 are compared:

2: `[2, 3, 4, 1, 5, 6]` ⇨ `[2, 3, 1, 4, 5, 6]` SWAP!

* 4 and 5 are compared:

3: `[2, 3, 1, 4, 5, 6]` ⇨ `[2, 3, 1, 4, 5, 6]` order is correct, don't swap

Stop!

Remember: we know that last element is the largest number in the list. There is no need to compare against that number ever again. We also now know that the **second** to last number is the second largest number; no need to move that one ever again as well. (Detect a trend?)

**Iteration 3**

* 2 and 3 are compared:

0: `[2, 3, 1, 4, 5, 6]` ⇨ `[2, 3, 1, 4, 5, 6]` order is correct, don't swap

If an element on the left has met a larger or equal element, we look at its bigger neighbor and now compare the larger neighbor to its neighbor on the right. The process is continued until our established end.

* 3 and 1 are compared:

1: `[2, 3, 1, 4, 5, 6]` ⇨ `[2, 1, 3, 4, 5, 6] `SWAP!

* 3 and 4 are compared:

2: `[2, 1, 3, 4, 5, 6]` ⇨ `[2, 1, 3, 4, 5, 6] `order is correct, don't swap

Stop!

We don't stop sorting until we hit the end, even if we find an element that's already sorted.

**Iteration 4**

* 2 and 1 are compared:

0: `[2, 1, 3, 4, 5, 6]` ⇨ `[1, 2, 3, 4, 5, 6]`

* 2 and 3 are compared:

1: `[1, 2, 3, 4, 5, 6]` ⇨ `[1, 2, 3, 4, 5, 6]`

Stop!

**Iteration 5**

* 1 and 2 are compared:

0: `[1, 2, 3, 4, 5, 6]` ⇨ Done!

Stop!

When there is only one element (the first element) left in our unsorted list, it is already sorted for us as a freebie!

List is now sorted using Bubble Sort: `[1, 2, 3, 4, 5, 6]`

Let's look at the algorithm:

[Try it!](http://jsbin.com/metiduseri/2/edit?js,console)
