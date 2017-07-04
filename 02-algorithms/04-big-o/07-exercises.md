

## Exercise: Determining Big-O Runtime

Without checking the website on the last page, can you answer these questions?

* What's the complexity of accessing an index in a list implemented by array?
<details>
<summary>Hint:</summary>
Using an array, we can directly call the exact index.
</details>
<details>
<summary>Answer:</summary>
`O(1)`. Since we don't need to iterate through all the items, index access in an array is `O(1)` constant time.
</details>


* What's the complexity of emptying a list implemented by array?
<details>
<summary>Hint:</summary>
There are two answers! Technically, in our implementation, you could set the `size` variable to 0. Elsewise, you could also set every item in the array to `undefined`.
</details>
<details>
<summary>Answer:</summary>
`O(1)` or `O(N)`. You can set `this.size = 0` in `O(1)` constant
time. If you wanted to iterate through the array and set everything to
`undefined`, then it would be an `O(N)` linear operation.
</details>


* What's the complexity of searching for a value in an unsorted array?
<details>
<summary>Hint:</summary>
If it's unsorted, you probably should start at the beginning of the array and just look through it.
</details>
<details>
<summary>Answer:</summary>
`O(N)`. Each access is `O(1)` to just call the index, but you're starting at index 1 and going up - at worst case, you might have to look through every item (n items!) to find it.
</details>


* What's the complexity of accessing an index in a linked list?
<details>
<summary>Hint:</summary>
There's no direct index access! You have a root, and each `node` object has a `.next` value pointing to the next one.
</details>
<details>
<summary>Answer:</summary>
`O(N)`. We have to start at the root node (index `0`) and follow the `next` until we're at the right index. Therefore, the method needs to search
   through (worst-case) all of the `n` items in the list, or `O(N)`.
</details>


* What's the complexity of searching for a value in a sorted array?
<details>
<summary>Hint:</summary>
We saw this previously - think of phone books!
</details>
<details>
<summary>Answer:</summary>
`O(log N)`. You can run binary search, which cuts the runtime in half at each
  step. Remember, the array **must** be sorted in order for binary search to work!

</details>
