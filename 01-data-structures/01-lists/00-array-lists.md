# Lists

A **List** is an **Abstract Data Type** similar to an **Array**. It's important to keep in mind that the idea of an array and the idea of a list are **different**. The JavaScript programming language actually blends the Computer Science concepts of Lists and Arrays together, because it simplifies programming. However, in many other programming
languages (like C, C++, and Java), Arrays and Lists are two separate things.

> Besides that lists have some additional functionality arrays don't, the biggest difference is that an array never, ever
changes its size (but a list can!).

Values can be overwritten or "zeroed-out" in an array, but
the slot for the index never changes. Objects and variables can actually be dynamically added or removed from a list.

Here's a classic definition of both list and array, and what an array can do versus what a
list can do. Again, you'll have to set aside what you know about how
arrays and lists work in JavaScript, because the JavaScript implementation of
arrays cheat against these formal definitions for the sake of convenience and
simplicity. We're going to learn about lists classically, first for your knowledge, and second for if you use a different language where the implementations of the two are separate.


* **Arrays:** - Simple and rigid.
  * You must specify the size of the array when it's
  created, and that size never changes.
  * You can only write a value to an index
  or read values from an index.
  * You must manually manipulate the array to
  shift items over if you want to add or remove something in the middle of the
  array.
* **Lists:** - More malleable than an array.
  * The size of a List may grow and
  shrink.
  * Elements can be added or removed in the middle of a list.
  * The List is
  programmed to automatically shift items to make room for a new item, or to
  fill gaps left by removed items.

Let's look at the formal specifications of each.

# Array Specification

This table provides a specification for a universal Array **Abstract Data Type**
that could exist in all programming languages, not just how arrays happen to
exist in JavaScript.

These will be review for you, but it's important to establish the specific specification before we can start comparing it!

<table>
  <tr>
    <th>Return type</th>
    <th>Operation</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>Array</td>
    <td>`myArray = [1,2]`</td>
    <td>
      Shortcut to create a new array with the given values of 1 and 2.
    </td>
  </tr>
  <tr>
    <td>Array</td>
    <td>`myArray = new Array(size)`</td>
    <td>
      Creates a new empty Array of length `size`. Every value in the new
      array is `undefined`.
    </td>
  </tr>
  <tr>
    <td>int</td>
    <td>`myArray.length`</td>
    <td>
      Returns the size of the array.
    </td>
  </tr>
  <tr>
    <td>item</td>
    <td>`myArray[i]`</td>
    <td>
      Returns the value at the index in the array.
    </td>
  </tr>
  <tr>
    <td></td>
    <td>`myArray[i] = value`</td>
    <td>
      Sets the value at the index in the array.
    </td>
  </tr>
</table>

> Arrays in JavaScript are more malleable than Arrays in some other
programming languages. JavaScript arrays have the methods `.push()`, `.pop()`,
and `.splice()` that modify the array in place. Notice that none of those JavaScript array operations are listed in this table - they aren't part of the classical array Abstract Data Type.

In this formal specification of an Array, there's no way to add or remove slots
in the array after it's been created. Values can be read and written at an
index, but the size of the array never changes.

Arrays are an excellent choice for storing data when you know the exact size of
the data. For example, if you knew the weather for each day of the week, you could make an array on that.

```js
var weatherData = [54, 57, 51, 51, 55, 58, 56];
```
And using `weatherData.length` and `weatherData[i]`, you could easily write a function loop that would calculate the average temperature from the week.

```js
var totalTemperature = 0;
for (var i = 0; i < weatherData.length; i++) {
  totalTemperature += weatherData[i];  
}

var averageTemperature = totalTemperature / weatherData.length;
console.log("This week's average temperature was:", averageTemperature);
```

If this is all you want to do, there is no reason to use anything besides an array.

# List Specification

Now, let's look at the specification for the Abstract Data Type of a List. You can see that Lists have basically the same functionality of an Array - and then a lot more. Don't worry about memorizing this table - we'll go through each piece.

<table>
  <tr>
    <th>Return type</th>
    <th>Operation</th>
    <th>Description</th>
    <th>In the Array specification?</th>
  </tr>
  <tr>
    <td>List</td>
    <td> // new List() </td>
    <td>Create a new empty list</td>
    <td>Yes - // new Array(size)</td>
  </tr>
  <tr>
    <td></td>
    <td>`append(item)`</td>
    <td>Adds an item at the end of the list</td>
    <td>No - arrays are a fixed size</td>
  </tr>
  <tr>
    <td>item</td>
    <td>`get(index)`</td>
    <td>Returns the item at the index in the list.</td>
    <td>Yes - `myArray[index]`</td>
  </tr>
  <tr>
    <td></td>
    <td>`set(i, item)`</td>
    <td>Overwrites the list at the index with value.</td>
    <td>Yes - `myArray[i] = value`</td>
  </tr>
  <tr>
    <td></td>
    <td>`insert(index, item)`</td>
    <td>
      Inserts the item at the index, shifting all existing elements up by one
      index to make room.
    </td>
    <td>No - arrays are a fixed size</td>
  </tr>
  <tr>
    <td>item</td>
    <td>`remove(index)`</td>
    <td>
      Removes and returns the item at the index in the list, shifting all
      elements after the index down by one to fill the now empty position.
    </td>
    <td>No - arrays are a fixed size</td>
  </tr>
  <tr>
    <td>int</td>
    <td>`size()`</td>
    <td>Returns the number of items in the list.</td>
    <td>Yes - `myArray.length`</td>
  </tr>
  <tr>
    <td>boolean</td>
    <td>isEmpty()</td>
    <td>Returns true if the list is empty.</td>
    <td>No - while achievable by checking if `myArray.length` is 0, this is not in the ADT of Array (with a list ADT, it's a core part not needing you to write anything extra!) </td>

  </tr>
  <tr>
    <td>List</td>
    <td>copy()</td>
    <td>
      Returns a new independent duplicate copy of the current list.
    </td>
    <td>No - while achievable with a function, this is not in the ADT of Array (with a list ADT, it's a core part not needing you to write anything extra!)</td>
  </tr>
</table>

We can compare the specifications for an **Array** and a **List** and see that
Lists have basically the same functionality of an Array, plus more. Both can
be created, have values can be overwritten at an index,
and have a value read at an index.

Conversely, the `.append()`, `.insert()` and `.remove()` operations of the **List ADT**
are especially unique. These operations all modify the size of a List by actually adding
or removing items. Our formal **Array ADT** does not support those operations.

The ability to dynamically change the size of the list means that lists are an excellent choice for storing data when you don't know how much
data you'll need to keep track of in the beginning.

> **Note:** `List()` is not built in to JavaScript (unlike many other languages). Because of this, you'll have to build this class
ourselves manually after this example - which is great so you can see how it works!


# Abstract List
Why hasn't there been a `try it` section for you to do it yourself? We've been talking about Abstract Data Types. Everything above describes Arrays and Lists abstractly. It's good to be able
to define how a data structure should behave with an Abstract Data Type
like this because we'll be able to talk about how the List as a Data Structure
should behave in any programming language. Learning **Data Structures** and
**Algorithms** is a great investment because it's knowledge that carries over
into *every* programming language.

Enough abstract magic. Let's look at how we turn that **Abstract Data Type**
specification of what a **List** is into a working *implementation* of a List.
