
# Removing Elements and Shrinking the List
Now you've seen how to implement the List constructor, `.append()` and `.get()`.
Next you'll write your own methods for `.set(i, item)` and `.remove(i)`.

`.set(i, item)` is easy. Simply overwrite the data in the array at the
given index.

`.remove(i)` is harder. Consider what "removing" something really means in an
Array. Imagine I had my three favorite foods with "cheese" at the top. One day, I become lactose intolerant. I'd have
to take Cheese off the top of my list.

## Bad Spotty Removal
If we wrote this down with pencil and paper or on a whiteboard, we'd have to
physically erase it from the list. There'd be a blank spot left. In fact, we'd
have to take the time to rewrite everything after cheese and scoot it all over
to make it look like a normal list without a blank spot in the front.

```
Favorite Foods: Cheese, Waffles, Fish    // write down my favorite foods.
Favorite Foods:         Waffles, Fish    // erase cheese.
Favorite Foods: Waffle           Fish    // erase waffle, move it over.
Favorite Foods: Waffle, Fish             // erase fish, move it over.
```

Arrays only give us read (`myArray[i]`) and write (`myArray[i] = 42`) access. If we want to
achieve the effect of removing something from an array we have to build that
effect out of read and write operations. We can't just obliterate an array
index out of existence!

We can overwrite the value of cheese with `undefined`. That seems like a good first
step because `"cheese"` is no longer in the array, but now there's an ugly
`undefined` value left over in the array. In fact, if we used a for loop
to print out everything in the array it would print "undefined" at some point. Oops!

```js
favoriteFoods = ["cheese", "waffles", "fish"];
favoriteFoods[0] = undefined;

[undefined, "waffles", "fish"]
```

Simply overwriting values becomes a problem that compounds on itself the more
it happens. Look at this array of numbers. Now imagine overwriting the value
of several of them with `undefined`.
```js
numbers = [0,1,2,3,4,5,6,7,8,9]
numbers[2] = undefined;
numbers[4] = undefined;
numbers[8] = undefined;
```
The end result is a spotty array with many
patches of `undefined` values.
```js
// this would be terrible.
[0, 1, undefined, 3, undefined, 5, 6, 7, undefined, 9]
```

Instead of overwriting values, we want to really *remove* them so there are no
`undefined` gaps left in the array.

Overwritten elements vs removed elements:

```js
// this would be terrible.
[0, 1, undefined, 3, undefined, 5, 6, 7, undefined, 9]

// this would be excellent!
[0,1,3,5,6,7,9]
```

## Filling Gaps After Overwriting
In order to keep our list clean we'll implement a new policy:

* Every time an item is overwritten during removal, every item after that index should be shifted to fill the empty space.
* After every item has been shifted, reduce the current `size` of the `List` by 1.

If we use this policy, then the list will never be left with `undefined` values
throughout the list.

This strategy technically leaves old stale values at the end of the array.
Decrementing the `size` variable should prevent us from ever accessing those
old stale values until the list grows and they're overwritten by something else.

# Exercise: Write a Proper Remove Method
Using the same JSBin as the previous page, write a method for our `List` class called `remove`.
* It accepts an integer
`index`.
* It should return the value kept in the array at `index`
* The method should return `false` if the
list was empty and no item was removed.

Starting there, we have:
```js
remove(index) {
  // Just return false if the list is already empty.
  if (this.size == 0) {
    return false;
  }

  // save the current data at the index so it can be returned at the end.
  var result = this.data[index];
  return result;
}
```
* To remove the element from the list, the method should
shift all other values in the list (also ensuring that there are never any empty gaps after an
element has been removed)
* The size of the list should go down by one if an item
was successfully removed from the list.

```js
remove(index) {
  // Just return false if the list is already empty.
  if (this.size == 0) {
    return false;
  }

  // save the current data at the index so it can be returned at the end.
  var result = this.data[index];

  // start the element that's supposed to be removed and shift
  // everything over by one.
  for (var i = index; i < this.size - 1; i++) {
    this.data[i] = this.data[i + 1];
  }

  // decrement the total size of the list.
  this.size--;

  return result;
}
```

Now you have a List class that can append and remove items! Hold on to this JSBin - let's add some more!
