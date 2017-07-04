
# Insertion Sort


Insertion sort is not terribly efficient, but it is still definitely faster than **Bubble Sort** and it works more
efficiently in a wide variety of circumstances, more than the narrow spectrum
**Bucket Sort** works well for.

The basic idea of **Insertion Sort** is that it looks for the smallest value
in the array, and puts that in the first position. Then, it looks for the next
smallest value in the array and puts that in the second position. So on and so
forth until the entire array is sorted.

This sorting algorithm is not the fastest in the world. It takes a lot of time
to search through the entire array each time to find the guaranteed smallest
item and it ends up traversing over and over the array many times. It performs
better than **Bubble Sort** because it guarantees to make a step toward good
progress every time it runs over the whole array to find the smallest value.
**Bubble Sort** can run over the array many, many times constantly swapping
values that are next to each other, but never really bringing the smallest
value all the way down to the bottom until after many, many iterations.

## Algorithm Instructions
* Write one `for` loop that iterates over each element in the array from `0` to
  the `length`.
* Write a function called `getSmallestIndex(myArray, iMin)` that takes a
  `myArray`, a minimum index value `iMin`, and returns the smallest value in the
  array between `iMin` and `myArray.length`.
* Have `for` loop execute the `getSmallestIndex` function for each element
  of the array.
* Swap the values of `myArray[i]` and `myArray[getSmallestIndex(i, myArray.length)]` so the
  smallest value always goes to the correct position in the array.
* Allow the `for` loop to continue for every element in the array, bringing the
  smallest value and swapping it out one-by-one.

![insertion sort](https://upload.wikimedia.org/wikipedia/commons/0/0f/Insertion-sort-example-300px.gif)
* Credit: Wikipedia

## Solution
[Try it!](http://jsbin.com/hakowex/1/edit?js,console)
```js
function insertionSort(myArray) {
  for (var i = 0; i < array.length; i++) {
    // find the guaranteed smallest index
    var minIndex = getSmallestIndex(myArray, i);

    // save the two values so one is not overwritten
    var temp = myArray[i];
    var min = myArray[minIndex];

    // swap the two values
    myArray[i] = min;
    myArray[minIndex] = temp;
  }
}

function getSmallestIndex(myArray, iMin) {
  // keep track of the smallest value, and the index you found it at
  var min = myArray[iMin];
  var minIndex = iMin;

  // iterate through the whole array from the start index looking for any
  // smaller value.
  for (var i = iMin; i < myArray.length; i++) {
    if (myArray[i] < min) {
      min = myArray[i];
      minIndex = i;
    }
  }

  // return just the index of the smaller value.
  return minIndex;
}
```
