Algorithms Recap
========================================================

That's it for the algorithms section!
Phew 😪!

Let's do a quick recap before we go get a head massage. 💆


## Algorithm Definition

An `Algorithm` is a fancy word for recipe.
When we have a problem (whether it's making a cake or sorting a list), we take a series of steps to solve that problem.

> Specifically, an `Algorithm` is a set of repeatable steps that produces the right answer every time.


## Top 3 Questions

There are three keys to assessing an algorithm:

1. Does it work?
2. How does it perform?
3. Can we do better?

The first question deals with algorithm correctness. You always want to make sure the algorithm actually solves the problem at hand.

The second question is all about Big-O. Analyze the algorithm and determine its Big-O classification (`O(1)`, `O(n)`, `O(log(n))`, etc).

The third question is a follow-up to the first two questions. It involves critical thought and opens up the challenge to new creative solutions. Now that you have an initial solution to the problem, is there a more clear or efficient way you can do it?



## What we covered

So far, we have covered:

### Recursion
A recursive function is a function that calls itself, like the Fibonacci sequence.
* Don't forget to have a base case and account for all edge cases, or you may fall into an infinite recursion, causing a stack overflow!

### Sorting
We've covered many sorts (bucket and insertion come to mind!), but merge sort (recursively splitting sorting half the items at a time) and bubble sort (comparing two items at a time sequentially) are the two most commonly known and most frequently asked about.
* Bubble sort is very slow and not recommended (`O(n)`)
* Merge sort is one of the most elegant and popular sorts used! (`O(n log n)`)

### Searching
There are many search algorithms. We covered linear search and binary search.

* Linear search is when items are searched one by one from the start to finish, until the element is found. The performance of this algorithm is `O(n)`.

* Binary search requires a list to be sorted, and works by starting in the middle, and going to the left or right depending on how the value in the middle compares to the item in question. It is called a divide-and-conquer algorithm because each step removes half of the possibilities. As such, the performance of this algorithm is `O(log(n))`.


### Big-O Notation

How efficient is your algorithm? For example, did you have to use one loop (`O(n)`), or a loop nested within a loop (`O(n^2)`)?

## Further reading

The following algorithms are far less likely to show up during interviews, and as such we haven't covered them. However, they are worth a read.

* [Radix sort](http://www.geeksforgeeks.org/radix-sort/)

Radix sort is good for sorting numbers. The idea of Radix Sort is to do digit by digit sort, starting from least significant digit to most significant digit.

* [Bucket sort](http://www.geeksforgeeks.org/bucket-sort-2/)

Bucket sort works by randomly assigning items to buckets and sorting the buckets. It is mainly useful when input is uniformly distributed over a range.

* [Tree traversal algorithms](http://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/)

These algorithms are used to traverse trees. They come up frequently in interview questions pertaining to trees, but trees themselves are a less common topic in interviews than the topics we've covered.

* [Dijkstras's algorithm](http://www.geeksforgeeks.org/greedy-algorithms-set-6-dijkstras-shortest-path-algorithm/)

Dijkstra's algorithm finds the shortest path between two points - think google maps and finding the quickest directions. Dijkstra's algorithm is quite famous and used in conjunction with graphs.

---

## [Cheat Sheet](http://bigocheatsheet.com/)
[This cheat sheet](http://bigocheatsheet.com/) summarizes everything we have covered so far. Use it as a reference for review.

---

# Takeaway

While the material we covered seems theoretical, each function you write is an algorithm - if you're writing a function, you're trying to solve a problem, even if it doesn't seem like it. For example, just printing things to the console is an algorithm.

Algorithms are a concept that comes up frequently during job interviews. As such, if you intend to get a job as a software developer, **practice practice practice** the material covered so far.
