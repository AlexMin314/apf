
# Merge Sort

> We've covered a lot of algorithms, but **merge sort is possibly the most important!!**

Merge sort is the first fast, powerful sorting algorithm that you will encounter in the wilds of the real world (it's baked into Safari and Firefox!). It uses an extremely efficient application of the 'Divide and Conquer' concept to sort lists of elements. It's also a great chance to practice recursion.

What are the two easiest lists to sort? An empty list, and a single-item
list.

How hard is it to create one large sorted array by merging together two
smaller sorted arrays? Not hard.

Merge sort is a recursive search algorithm built on these two premises.
It takes one array and splits it in half over and over again until their
small and sorted, then it merges small sorted pieces together on their
way back up.

[Let's go back to that Hungarian folk dance](https://www.youtube.com/watch?v=XaqR3G_NVoo&feature=youtu.be&t=204)
![Dance](https://camo.githubusercontent.com/dfdd07e3449ed3a0ab64216c36f8d2204008375b/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f313136314243657639394f7552692f67697068792e676966)


Here's a diagram of what happens:

```
                     [9, 2, 7, 4, 6, 1, 3, 5, 8]
split               /                           \
              [9, 2, 7, 4]                [6, 1, 3, 5, 8]
split        /            \              /               \
          [9, 2]        [7, 4]        [6, 1]          [3, 5, 8]
split    /      \      /      \      /      \        /         \
       [9]      [2]  [7]      [4]   [6]     [1]    [3]       [5, 8]
         |      |      |      |      |      |        |       /    \   split
         |      |      |      |      |      |        |     [5]    [8]
         |      |      |      |      |      |        |       \    /   merge
         |      |      |      |      |      |        |       [5, 8]
merge    \      /      \      /      \      /        \         /
          [2, 9]        [4, 7]        [1, 6]          [3, 5, 8]
merge        \            /              \               /
              [2, 4, 7, 9]                [1, 3, 5, 6, 8]
merge               \                           /
                     [1, 2, 3, 4, 5, 6, 7, 8, 9]
```


There are usually TWO algorithms that work together to accomplish a merge sort:

* A merging algorithm that takes two sorted arrays and combined them into one large sorted array pushing the lowest to highest valued elements. The merge algorithm is not recursive.

* A merge sort algorithm that takes an array, splits it into two halves, recursively merge sorts both halves, and finally uses the merge algorithm to put them back together into one sorted array.

### Pseudo-code for merge:
Here's the basic idea of the merge algorithm (which relies on two sorted arrays that from the merge sort!):

0. Split the initial array into two.
1. Start at the beginning of both lists (arrays) of items.
2. Compare the first item from each list.
3. Whichever is less, copy it to a results list.
4. Move on to the next item in the array that just gave its first element.
5. Repeat steps 1-4 until you have all the elements from both lists in the results list.



### Pseudo-code for merge sort:
Notice that the algorithm continues to split arrays until they're down
to single-item arrays. The split step does not check to see if arrays
are sorted. It relies on the fact that zero or single-element arrays
are fundamentally sorted and only returns those.

This is all one function:
* if the array contains zero or one elements return it.
* split the array into left and right halves
* recursively merge_sort the left half
* recursively merge_sort the right half
* now the halves are guaranteed to be sorted
* run a merge algorithm to merge the two sorted arrays into one
* return the now-sorted array.



## Exercise! Make your own merge sort implementation!

**Goal: Write a `merge` function and a `mergeSort` function to implement recursive merge sort as described above.**

* Start with the recursive mergeSort -- assume you have a working merge function (though we'll write that next!). Consider:
  * What base case(s) do you need for mergeSort?
  * What smaller subproblems can you solve recursively?
  * How will you go from the solutions for subproblems, to a solution for the overall problem?
* Next, tackle merge. This isn't recursive, but edge cases can make it tricky!

> [Start here](http://jsbin.com/qujacumaca/2/edit?js,console)

> [Hint - pseudocode!](http://jsbin.com/catuhacopi/2/edit?js,console)

> [Solution here](http://jsbin.com/piqasuxoso/3/edit?js,console)

Bonus: As you can see here, it's possible to implement `merge sort` without a separate `merge` function. [Try it!](http://jsbin.com/janoxaq/1/edit?js,console)
