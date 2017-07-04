# List Problems
The nice thing about having one specification for the **List ADT** is that you
can interact with every list the same, no matter what implementation is being
used. If you have an `ArrayList` and a `LinkedList` that both implement the
**List ADT** specification then you can write algorithms that will deliver the
same answer without knowing what list implementation is being used.

This gives code some flexibility. You can still choose which data structure
implementation to use because you'll know that advantages of that data
structure. Still, you can write code that will work even if someone else chose
a different List implementation.

Here's the List specification again and a list of problems. Write a solution to
the problem using just the methods in the **List ADT** specification. Decide
which data structure you would choose for the implementation.

This code should behave identically for both the `ArrayList` and the
`LinkedList` because they both implement everything in the general **List**
specification for it's **Abstract Data Structure**. That being said, the two
different implementations of the list will perform better in different parts of
the code.

Write down the pros and cons of the list being an `ArrayList` and a `LinkedList`
for this small piece of code.

```js
function makeList(list) {
  for (i = 0; i < 10; i++) {
    list.prepend(i);
  }
}

function sum(list) {
  var total = 0;
  for (var i = 0; i < list.size; i++) {
    total += list.get(i);
  }
  return total;
}

var l1 = new ArrayList();
var l2 = new LinkedList();

makeList(l1);
makeList(l2);

sum(l1);
sum(l2);
```

<table>
  <tr>
    <th>Return type</th>
    <th>Operation</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>List</td>
    <td>new List()</td>
    <td>Create a new empty list</td>
  </tr>
  <tr>
    <td></td>
    <td>append(item)</td>
    <td>Adds an item at the end of the list</td>
  </tr>
  <tr>
    <td>item</td>
    <td>get(index)</td>
    <td>Returns the item at the index in the list.</td>
  </tr>
  <tr>
    <td></td>
    <td>set(i, item)</td>
    <td>Overwrites the list at the index with value.</td>
  </tr>
  <tr>
    <td></td>
    <td>insert(index, item)</td>
    <td>
      Inserts the item at the index, shifting all existing elements up by one
      index to make room.
    </td>
  </tr>
  <tr>
    <td>item</td>
    <td>remove(index)</td>
    <td>
      Removes and returns the item at the index in the list, shifting all
      elements after the index down by one to fill the now empty position.
    </td>
  </tr>
  <tr>
    <td>int</td>
    <td>size()</td>
    <td>Returns the number of items in the list.</td>
  </tr>
  <tr>
    <td>boolean</td>
    <td>isEmpty()</td>
    <td>Returns true if the list is empty.</td>
  </tr>
  <tr>
    <td>List</td>
    <td>copy()</td>
    <td>
      Returns a new independent duplicate copy of the current list.
    </td>
  </tr>
</table>

# Conclusion
The code above involves using the `prepend` method to insert data in the front
of the two lists, then using the `get(i)` method to access every element in each
list and add all of the numbers up to calculate a total.

The `LinkedList` will execute all of the `prepend` methods quickly because it's
very efficient to insert things at the front of Linked Lists. Linked Lists don't
have to shift every other item over to make room for new items.

The `ArrayList` will execute the `prepend` instruction slowly because it will
have to shift existing elements over by one position in the array as new
elements are added.

The `LinkedList` will perform the `get(i)` methods slowly because it has to
iterate from the front of the list at `root` all the way to each node each
time the method is called. It's true that someone could write code specifically
tailored to iterate through the Linked List efficiently, but that's just not
how the `.get(i)` method is specified to behave. The `.get(i)` method doesn't
know that someone is going to access things sequentially so it cannot be
optimized overall.

The `ArrayList` will perform the `get(i)` methods extremely quickly because
arrays have fast lookup for their indexes. Arrays don't have to count through
their elements to see where things are. They know that something at `a[17]`
is exactly `17` steps away and it can jump right to it.

# Which One to Choose?
Data Structures are defined with different advantages and disadvantages.
Different problems will present different challenges too. An `ArrayList` isn't
always the right solution. Neither is a `LinkedList`. Maybe the best solution is
another data structure and doesn't involve Lists at all!

It's your job as a professional programmer to understand the pros and cons of
each data structure and choose the right tool for the job.

1. How is a deck of cards similar to a linked list?

2. What is the benefit of a linked list over an array?
