## Queue summary
Congratulations! You have completed the queue data structure by implementing the following methods:

+ `enqueue()` - Adds to the back of the queue
+ `dequeue()` - Removes from the front of the queue
+ `peek()` - Gives you the value at the front of the queue without removing it
+ `isEmpty()` - Determines whether the queue is empty or not
+ `size()` - Tells how many elements are in the queue


---

# Takeaways

+ A queue works like a line. New elements are added to the back of the queue, and elements are pulled from the front of the queue.

+ A queue is a FIFO (first-in-first-out) data structure. This is a fancy term for _first-come first-serve_, meaning that the first element to get dequeued from the queue is the element at the front of the queue.

+ Queues are easy to implement using a JavaScript `Array`.

### Message Queues

 Queues are often used to create "buffers" that temporarily store data from one part of a program until another part of a program can process the data. This is common with asynchronous data transfer, or mismatches between how often data is sent and how often it can be processed.

 Think of a scenario where restaurant diners order food faster than the chefs can cook it.

 Describe how you would use a queue help the chef keep track of meals to make.  What should the chef do when the queue is empty?
