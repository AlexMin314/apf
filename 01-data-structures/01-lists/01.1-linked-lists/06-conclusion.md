
## Main Difference Between Arrays and Linked Lists
Lists implemented with Arrays still have their own advantages. Arrays are fast
at looking something up according to a specific index. If you ask for `a[17]`
an array knows the exact location of index 17.

Linked Lists don't specialize at knowing where things are stored. Because
there's no underlying array you can't access elements directly with `a[17]`.
Instead, you have to follow the "rope" or chain of references from each node to
the next, counting each step as you go, until you find out what node exists at
the 17th position.

Although individual array lookups with `a[17]` are all fast, arrays need to
keep everything ordered as we saw with `ArrayList`. It takes time to shift
elements to make space for a new element, or shift elements to fill spaces
after elements are removed.

We'll see that the advantage of the **Link List** data structure is that
the references between each node item in the list doesn't have to be in order
like indexes like an array. We'll see that we can rearrange, insert and remove
nodes in the list actually quite efficiently.

* Arrays have fast lookup by index, like `a[17]`
* Arrays are slow when shifting each element to make room for a new item in
  the middle.
* Arrays are slow when shifting each element to shrink the list to fill gaps
  left by removed elements.
* Linked Lists are fast at adding new links in the chain of their list.
* Linked Lists are fast at cutting nodes out of the order of a list.
* Arrays and Lists are equally good at searching through their whole list
  to find out if something is there, because each data structure has to
  look at the items in itself one by one.

# Conclusion

### But wait! You've never had to worry about array size...

Totally! In lower level computer programming languages like C, you would have to. JavaScript and Ruby handle array sizing and resizing for you efficiently. That's one of the reasons we love higher level programming languages.

But! in interviews it's good to know what's happening in the background, because that's the biggest difference between arrays and linked lists.

### Array / Linked List Tradeoff

Creating a linked list is a bit like renting buildings all around the city, wherever it's convenient. Your computer knows the address of the headquarters (the head of the linked list), and each building manager has the address of the next building you own.

### Now...

Linked lists don't need to be resized with one giant block of memory; they can grow with pointers to other parts of the computer's memory. You don't have to find continuous free space.

It's easier to insert into the middle of a linked list, because with an array you'd need to move every element after the insertion point over by one. It's easier with linked lists, as you'll see in the challenges.

On the other hand...

- You can't quickly access a particular node in a linked list, like you can with array indices. You have to start with the head and move sequentially.

- Linked lists take up a bit more space because in addition to storing the actual data, you have to store the pointers. (You have to hire building managers to keep track of where the next address is!)

- It can take more time to access a full linked list, because the data living in different places can't just be read as a continuous chunk. You have to travel around the city to visit all of your buildings.

## Applications

File systems! Files are often stored in chunks, but when files grow large they may not fit in their original chunk. You can think of a file as a series of nodes with chunks of data and links to the next section of the file. (They're often actually implemented with a more complex related data structure called a B-tree.)

### Next...
Now that you know that **Linked Lists** are implemented with `ListNodes`
continue to the beginner Linked List exercises and practice manipulating
small lists built out of nodes.

When we're done with the list manipulation exercises we'll see how to
encapsulate those manipulations in class methods for a `LinkedList` class.
