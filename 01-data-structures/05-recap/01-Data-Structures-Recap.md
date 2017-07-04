Data Structures Recap
========================================================

You've reached the end of the Data Structures lesson. Go have yourself a nice milkshake.🥛

Before continuing on to the next section, let's recap data structures.

## Definition

> A **Data Structure** is a way of storing and organizing data.

Now that you have been exposed to various different data structures, this definition should make sense. At the end of the day, data structures are all about storing data in a particular way. In fact, if you think of a new way to store or structure data, you could even create your own.


## What we covered

So far, we have covered:

### Array
* An ordered, fixed-sized list
* Good at maintaining order.
* Elements are accessed by their index (0, 1, 2...)
* Great when you only need a certain amount of space (and you know that amount in advance)

### List
* Similar to an array, but its size can change.
* Shrinks to fill gaps when elements are removed.
* Grows to make room when elements are inserted in the middle.
* In an array implementation, elements maintain their order according to their index.
* In a linked list implementation, elements maintain their order according to `.next` pointers in each node

### Set
* A collection of unique elements where order doesn't matter.
* Duplicate elements added to a set are simply ignored.
* Useful for storing emails, user-ids, or other forms of data where duplicates are not allowed.

### Stack
* A last-in-first-out (LIFO) data structure that is like a list, where the most-recently-inserted element is accessed first.
* New elements are always added to the top of the stack. Think of a stack of pancakes!
* A stack is useful for reversing a list (a hint for a later exercise!); computers run by call stacks.

### Queue
* A first-in-first-out (FIFO) data structure that is like a list or queue, except where elements are always retrieved from the head.
* Elements are added to the back of the queue. Think of a line at the grocery store!


### Map
* A Map is a key-value store that is all about the relationship between a key and its value.
* Values are accessed by using keys.
* Use a Map when you need to create links from one bit of data to another, for example, an email to a profile picture, a URL to an image, or menu names to the actual food!


## What we did not cover

These are less commonly used data structures that we did not cover in our module but you may want to look over:

+ [Trees](http://www.cs.cmu.edu/~clo/www/CMU/DataStructures/Lessons/lesson4_1.htm)
+ [Graphs](http://www.cs.cmu.edu/~clo/www/CMU/DataStructures/Lessons/lesson5_1.htm)


## Takeaway

Data structures are a concept that come up frequently during job interviews. As such, if you intend to get a job as a software developer, **practice practice practice** the material covered so far.

Moreover, as you will see in the upcoming **Algorithms Unit**, data structures are essential for solving many challenges and everyday problems.
