
# Making Room For New Elements
Inserting elements in the middle of the list presents similar problems as
removing elements from the list. In order to squeeze a new element in to the
middle of a list, the entire list has to shift over the elements that come after this spot to
make room for it.

First, let's just visualize how the underlying array looks as the list grows. When you're doing `append`, it's adding an element - we'll make sure there's enough room for one new element
in the unused space at the end of the list in the underlying array. You use the `grow` method
to double the size of the array if you're trying to `append` something when the
underlying array can't fit anything more.

This table uses underscore characters to represent indexes in the array that
have `undefined` values, for the sake of brevity. The internal array starts
with a default size of 2, so grows occur often.

<table>
  <tr>
    <th>Action</th>
    <th>Contents</th>
    <th>Grows?</th>
    <th>List Size</th>
    <th>Array Length</th>
  </tr>
  <tr>
    <td>create the array</td>
    <td>[\_, \_]</td>
    <td></td>
    <td>0</td>
    <td>2</td>
  </tr>
  <tr>
    <td>append 1</td>
    <td>[1, \_]</td>
    <td>no</td>
    <td>1</td>
    <td>2</td>
  </tr>
  <tr>
    <td>append 2</td>
    <td>[1, 2]</td>
    <td>no</td>
    <td>2</td>
    <td>2</td>
  </tr>
  <tr>
    <td>append 3</td>
    <td>[1, 2, 3, \_]</td>
    <td>yes</td>
    <td>3</td>
    <td>4</td>
  </tr>
  <tr>
    <td>append 4</td>
    <td>[1, 2, 3, 4]</td>
    <td>no</td>
    <td>4</td>
    <td>4</td>
  </tr>
  <tr>
    <td>append 5</td>
    <td>[1, 2, 3, 4, 5, \_, \_, \_]</td>
    <td>yes</td>
    <td>5</td>
    <td>8</td>
  </tr>
  <tr>
    <td>append 6</td>
    <td>[1, 2, 3, 4, 5, 6, \_, \_]</td>
    <td>no</td>
    <td>6</td>
    <td>8</td>
  </tr>
  <tr>
    <td>append 7</td>
    <td>[1, 2, 3, 4, 5, 6, 7, \_]</td>
    <td>no</td>
    <td>7</td>
    <td>8</td>
  </tr>
  <tr>
    <td>append 8</td>
    <td>[1, 2, 3, 4, 5, 6, 7, 8]</td>
    <td>no</td>
    <td>8</td>
    <td>8</td>
  </tr>
  <tr>
    <td>append 9</td>
    <td>[1, 2, 3, 4, 5, 6, 7, 8, 9, \_, ...]</td>
    <td>yes</td>
    <td>9</td>
    <td>16</td>
  </tr>
</table>


## Exercise: Write an Insert method

Using your JSBin with your list (so you have a spot to write and can test it out!), write an `.insert(i, item)` method for the `ArrayList` class that inserts new
items at the given index.
* Make sure to scoot previous items at the index out
of the way with a `for` loop.
* Make sure there's enough room for one new element
in the unused space at the end of the list in the array.
  * Use the `grow` method
to double the size of the array if you're trying to `insert` something when the
underlying array can't fit anything more.

It might be helpful to fill out a table representing the state of the list as
it changes to help you figure out when exactly to grow the array.

> Check your solution [here](../../exercise-solutions/list-remove-solution.js)
> Don't close the JSBin! There are more exercises to come...
