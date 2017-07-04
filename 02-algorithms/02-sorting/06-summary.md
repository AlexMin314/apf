## Summary on sorting

There are many, many ways to sort. We covered:

* Insertion sort
  * A simple sorting algorithm that is relatively efficient for small lists and mostly sorted lists
  * Takes elements from the list one by one and inserting them in their correct position into a new sorted list.

* Merge sort
  * An efficient sorting algorithm that recursively splits up arrays and merges the halves
  * Popular for practical implementations- Java, python, Perl, and other languages default to this.

* Bubble sort
  * A simple sorting algorithm
  * Starts at the beginning of the data set; compares the first two elements, then all adjacent after that
  * Swaps adjacent as it goes
  * Repeats until no swaps occur on the last pass (it's sorted!)

* Bucket sort
  * Divide and conquer sorting algorithm; works best with evenly distributed and dense data sets
  * Splits an array into a finite number of buckets
  * Each bucket is then sorted individually (either using a different sorting algorithm or by recursively applying the bucket sorting algorithm).
  * Then combines sorted buckets


Watch this video showing all sorts of sorting algorithms being run on lists.
The video shows the algorithms running on an array with several types of data
in it:

* Totally scrambled random numbers
* A collection of numbers with few unique values and many, many duplicates
* A collection of numbers that's totally reversed.
* A collection that's almost already sorted, but not quite.

[Visualized Sorting Algorithms](https://www.youtube.com/watch?v=ZZuD6iUe3Pc)
